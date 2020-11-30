document.getElementById("buscaCep").addEventListener("click", () => {
  const cep = document.getElementById("Cep").value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`) 
  .then((res) => res.json())
  .then((data) => {
   document.getElementById("debug").innerHTML = JSON.stringify(data);
   
   fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${data.uf}/distritos`)
   .then((res) => res.json())
     .then((data) => 
     console.log(data));
  });
});