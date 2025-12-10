<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Usuń duplikaty</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; background: #f0f0f0; }
    textarea { width: 100%; height: 300px; }
    #result { margin-top: 20px; background: #fff; padding: 10px; border-radius: 5px; }
    button { padding: 10px 20px; margin-top: 10px; cursor: pointer; }
  </style>
</head>
<body>

<h2>Usuń duplikaty z listy polubień</h2>
<textarea id="inputList" placeholder="Wklej tutaj swoją listę..."></textarea>
<br>
<button onclick="removeDuplicates()">Usuń duplikaty</button>

<div id="result"></div>

<script>
function removeDuplicates() {
  const input = document.getElementById('inputList').value;
  const lines = input.split('\n').map(line => line.trim()).filter(line => line !== '');
  
  // Usuwanie duplikatów
  const uniqueLines = [...new Set(lines)];
  
  // Wyświetlanie wyniku
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<p>Liczba unikalnych wpisów: <b>${uniqueLines.length}</b></p>
                         <p>${uniqueLines.join('<br>')}</p>`;
}
</script>

</body>
</html>
