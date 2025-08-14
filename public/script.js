const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const buffer = e.target.result;
        const uint8Array = new Uint8Array(buffer);
        // console.log(uint8Array.length);

         for (let i = 0; i < uint8Array.length; i += 8) {
         }
    }
});