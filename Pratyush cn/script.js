const fields = ["name", "email", "phone", "summary", "education", "experience", "projects", "skills"];

  function updatePreview() {
    fields.forEach(field => {
      const value = document.getElementById(field).value.trim();
      const preview = document.getElementById("preview" + capitalize(field));
      if (preview) preview.innerHTML = (value || "[Not Provided]").replace(/\n/g, "<br>");
    });
  }
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  document.getElementById('resumeForm').addEventListener('input', updatePreview);

  document.getElementById('downloadBtn').addEventListener('click', () => {
    updatePreview();

    const element = document.getElementById('resumePreview');

    element.classList.add('print-mode');

    setTimeout(() => {
      html2pdf().set({
        margin: [0.5, 0.5],
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] }
      }).from(element).save().then(() => {
   
        element.classList.remove('print-mode');
      });
    }, 100);
  });