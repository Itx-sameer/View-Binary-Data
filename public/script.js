const inputFile = document.getElementById('inputFile');

inputFile.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (!file)
    {
        alert("Select a file!");
    }
    else
    {
        alert(`selected file ${file.name}`);
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const buffer = e.target.result;
        const uint8Array = new Uint8Array(buffer);
        // console.log(uint8Array.length);
        let res = '';  
        for (let i = 0; i < uint8Array.length; i += 8) {
            let hex = '',ascii='';
            for(let j = 0;j<8 && i+j <uint8Array.length; j++){
                const bitPosition = i+j;
                const bitData = uint8Array[bitPosition];

                hex += bitData.toString(16).padStart(2, '0')+ ' ';
                if(bitData >= 32 && bitData <= 126){
                     ascii += String.fromCharCode(bitData);
                }else{
                    ascii += '❌';
                }
            }
             res += `${i.toString().padStart(4, '0')}:     ${hex.padEnd(24)}         ${ascii}\n`;
         }
         const output = document.getElementById('output');
         output.textContent = res;
    }
    reader.readAsArrayBuffer(file);
});