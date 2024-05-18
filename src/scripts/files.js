/**
 * File saving and loading.
 */
const Files = (function () {
  /**
   * Loads a text file.
   * @param {object} file - A file.
   * @param {function} onload - Execute this function on successful load.
   */
  function loadTextFile(file, onload) {
    let reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = onload;
    reader.onerror = function (e) {
      alert("error reading file");
    };
  }

  /**
   * Saves content to a json file.
   * @param {string} filename - The target filename.
   * @param {object} content - The target content.
   */
  function saveJson(filename, content) {
    let blob = new Blob([JSON.stringify(content)], {
      type: "text/plain;charset=utf-8",
    });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = sanitiseFilename(filename) + ".json";
    document.body.appendChild(link); //Firefox requires the link to be in the body
    link.click();
    document.body.removeChild(link); //remove the link when done

    fetch(
      `https://monster-maker-hakim-415f92e8.koyeb.app/api/generate-s3-url-for-upload?fileName=${
        sanitiseFilename(filename) + ".json"
      }&fileType=application/json`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the signed URL");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data => ", data);
        const signedUrl = data.signedUrl;

        // Step 2: Upload the file to S3
        return fetch(signedUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: blob,
        });
      })
      .then((uploadResponse) => {
        if (!uploadResponse.ok) {
          throw new Error("Failed to upload the file");
        }
        console.log("JSON file uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  /**
   * Saves content to a json file.
   * @param {string} filename - The target filename.
   * @param {object} content - The target content.
   */
  function saveToS3(filename, content) {
    let blob = new Blob([JSON.stringify(content)], {
      type: "text/plain;charset=utf-8",
    });

    fetch(
      `https://monster-maker-hakim-415f92e8.koyeb.app/api/generate-s3-url-for-upload?fileName=${
        sanitiseFilename(filename) + ".json"
      }&fileType=application/json`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the signed URL");
        }
        return response.json();
      })
      .then((data) => {
        const signedUrl = data.signedUrl;

        // Step 2: Upload the file to S3
        return fetch(signedUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: blob,
        });
      })
      .then((uploadResponse) => {
        if (!uploadResponse.ok) {
          throw new Error("Failed to upload the file");
        }
        console.log("JSON file uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  /**
   * Saves content to a json file.
   * @param {string} filename - The target filename.
   * @param {object} content - The target content.
   */
  function downloadLatestVaultFromS3() {
    return fetch(
      "https://monster-maker-hakim-415f92e8.koyeb.app/api/generate-s3-url-for-download?fileName=monster_vault.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the signed URL");
        }
        return response.json();
      })
      .then((data) => {
        const signedUrl = data.signedUrl;

        // Step 2: Download the file from S3
        return fetch(signedUrl, {
          method: "GET",
        });
      })
      .then((downloadResponse) => {
        if (!downloadResponse.ok) {
          throw new Error("Failed to download the file");
        }

        return downloadResponse.json();
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error; // Re-throw the error to propagate it to the caller
      });
  }

  /**
   * Saves a png file.
   * @param {string} filename - The target filename.
   * @param {object} content - The target canvas url data.
   */
  function savePng(filename, content) {
    let blob = dataURLtoBlob(content);
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = sanitiseFilename(filename) + ".png";
    document.body.appendChild(link); //Firefox requires the link to be in the body
    link.click();
    document.body.removeChild(link); //remove the link when done
  }

  /**
   * Saves content to the clipboard.
   * @param {object} content - The target content.
   */
  function saveToClipboard(content) {
    let input = document.createElement("input");
    input.setAttribute("value", content);
    document.body.appendChild(input); //Firefox requires the link to be in the body
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input); //remove the link when done
  }

  /**
   * Convert a data url to a download-safe blob.
   * @param {string} dataurl - The target data url.
   * @returns {blob} - A download-safe blob.
   */
  function dataURLtoBlob(dataurl) {
    let arr = dataurl.split(",");
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  /**
   * Sanitise a string to a safe filename.
   * Original src: https://github.com/parshap/node-sanitize-filename/blob/master/index.js
   * @param {string} filename - The target filename.
   * @returns {string} - A sanitised string (max length 200).
   */
  function sanitiseFilename(filename) {
    let illegalRe = /[\/\?<>\\:\*\|":]/g;
    let controlRe = /[\x00-\x1f\x80-\x9f]/g;
    let reservedRe = /^\.+$/;
    let windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
    let windowsTrailingRe = /[\. ]+$/;
    let output = filename
      .replace(illegalRe, "")
      .replace(controlRe, "")
      .replace(reservedRe, "")
      .replace(windowsReservedRe, "")
      .replace(windowsTrailingRe, "");
    return output.substring(0, Math.min(200, output.length));
  }

  return {
    loadTextFile: loadTextFile,
    saveJson: saveJson,
    saveToS3: saveToS3,
    downloadLatestVaultFromS3: downloadLatestVaultFromS3,
    savePng: savePng,
    saveToClipboard: saveToClipboard,
  };
})();

export default Files;
