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
            for(let j = 0;j<8 && i+j <uint8Array.length; j++){
                const bitPosition = i+j;
                const bitData = uint8Array[bitPosition];
                
            }
         }
    }
});