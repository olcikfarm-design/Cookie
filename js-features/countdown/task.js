const timerElement = document.getElementById('timer');

let timeLeft = parseInt(timerElement.textContent, 10);

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(secs).padStart(2, '0');

  return `${hh}:${mm}:${ss}`;
}

timerElement.textContent = formatTime(timeLeft);

const timerId = setInterval(() => {
  timeLeft--; 
  
  timerElement.textContent = formatTime(timeLeft);

    if (timeLeft <= 0) {
    clearInterval(timerId); 
    
    alert('Вы победили в конкурсе!');

    const downloadLink = document.createElement('a');
    
    const fileContent = 'Поздравляем с победой в конкурсе! Это ваш призовой файл.';
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const fileUrl = URL.createObjectURL(blob);
    
    downloadLink.href = fileUrl;
    downloadLink.download = 'prize_congratulations.txt'; 
    downloadLink.target = '_blank'; 
    downloadLink.style.display = 'none'; 
    
    document.body.appendChild(downloadLink);
    
    downloadLink.click();
    
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(fileUrl);
  }
}, 1000);