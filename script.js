  <script>
    const waktu = new Date();

    let greeting = "";
    const jam = waktu.getHours();
    const menit = waktu.getMinutes();

    if (jam <= 9) {
      greeting = "Good morning, embrace the shadows of dawn ";
    } else if (jam <= 14) {
      greeting = "The darkness awaits in daylight ";
    } else if (jam <= 18) {
      greeting = "Twilight approaches, the abyss calls";
    } else {
      greeting = "Welcome to the eternal night";
    }

    document.getElementById("greeting").innerText = greeting;
  </script>
