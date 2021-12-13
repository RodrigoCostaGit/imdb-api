const urlBase = "http://localhost:8000/api";
const modalLogin = document.getElementById("modalLogin");
const bsModalLogin = new bootstrap.Modal(
  modalLogin,
  (backdrop = "static")
); 
const modalRegistar = document.getElementById("modalRegistar");
const bsModalRegistar = new bootstrap.Modal(
  modalRegistar,
  (backdrop = "static")
); 

const btnModalLogin = document.getElementById("btnModalLogin");
const btnModalRegistar = document.getElementById("btnModalRegistar");
const btnLogoff = document.getElementById("btnLogoff");

modalLogin.addEventListener("shown.bs.modal", () => {
  document.getElementById("usernameLogin").focus();
});
btnModalLogin.addEventListener("click", () => {
  bsModalLogin.show();
});
btnModalRegistar.addEventListener("click", () => {
  bsModalRegistar.show();
});
btnLogoff.addEventListener("click", () => {
  localStorage.removeItem("token");
  document.getElementById("btnLogoff").style.display = "none";
  window.location.replace("index.html");
});

function validaRegisto() {
  let email = document.getElementById("usernameRegistar").value; 
  let senha = document.getElementById("senhaRegistar").value; 
  const statReg = document.getElementById("statusRegistar");
  if (senha.length < 4) {
    document.getElementById("passErroLogin").innerHTML =
      "A senha tem de ter ao menos 4 carateres";
    return;
  }
  fetch(`${urlBase}/registar`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    body: `email=${email}&password=${senha}`,
  })
    .then(async (response) => {
      if (!response.ok) {
        erro = response.statusText;
        statReg.innerHTML = response.statusText;
        throw new Error(erro);
      }
      result = await response.json();
      console.log(result.message);
      statReg.innerHTML = result.message;
    })
    .catch((error) => {
      document.getElementById(
        "statusRegistar"
      ).innerHTML = `Pedido falhado: ${error}`;
    });
}

function validaLogin() {
  let email = document.getElementById("usernameLogin").value; 
  let senha = document.getElementById("senhaLogin").value; 
  if (senha.length < 4) {
    document.getElementById("passErroLogin").innerHTML =
      "A senha tem de ter ao menos 4 carateres";
    return;
  }
  const statLogin = document.getElementById("statusLogin");

  fetch(`${urlBase}/login`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST", 
    body: `email=${email}&password=${senha}`,
  })
    .then(async (response) => {
      if (!response.ok) {
        erro = await(response.json())
        throw new Error(erro.msg);
      }
      result = await response.json();
      console.log(result.accessToken);
      const token = result.accessToken;
      localStorage.setItem("token", token);
      document.getElementById("statusLogin").innerHTML = "Sucesso!";
      document.getElementById("btnLoginClose").click();
    })
    .catch(async (error) => {
      statLogin.innerHTML = error
    });
}
async function top250movies(id) {
    const urlBase = "http://localhost:8000/api/filmes";
  
    let url = urlBase;
    const token = localStorage.token;
    console.log(token)
  
    console.log("URL: " + url);
    const myInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    const myRequest = new Request(url, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        resposta.innerHTML = "Tem que realizar o login para aceder ao conteudo";
      } else {
        window.location.href = "http://localhost:8000/topmovies";  
      }
    });
  }

  async function topFantasy(id) {
    const urlBase = "http://localhost:8000/api/filmes";
    
    let url = urlBase;
    const token = localStorage.token;
    console.log(token)
  
    console.log("URL: " + url);
    const myInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    const myRequest = new Request(url, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        resposta.innerHTML = "Tem que realizar o login para aceder ao conteudo";
      } else {
        window.location.href = "http://localhost:8000/popular/fantasy";  
      }
    });
  }

  async function topAction(id) {
    const urlBase = "http://localhost:8000/api/filmes";
  
    let url = urlBase;
    const token = localStorage.token;
    console.log(token)
  
    console.log("URL: " + url);
    const myInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    const myRequest = new Request(url, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        resposta.innerHTML = "Tem que realizar o login para aceder ao conteudo";
      } else {
        window.location.href = "http://localhost:8000/popular/action";  
      }
    });
  }

  async function topHorror(id) {
    const urlBase = "http://localhost:8000/api/filmes";
  
    let url = urlBase;
    const token = localStorage.token;
    console.log(token)
  
    console.log("URL: " + url);
    const myInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    const myRequest = new Request(url, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        resposta.innerHTML = "Tem que realizar o login para aceder ao conteudo";
      } else {
        window.location.href = "http://localhost:8000/popular/horror";  
      }
    });
  }
  async function topRomance(id) {
    const urlBase = "http://localhost:8000/api/filmes";
  
    let url = urlBase;
    const token = localStorage.token;
    console.log(token)
  
    console.log("URL: " + url);
    const myInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    const myRequest = new Request(url, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        resposta.innerHTML = "Tem que realizar o login para aceder ao conteudo";
      } else {
        window.location.href = "http://localhost:8000/popular/romance";  
      }
    });
  }
  async function topThriller(id) {
    const urlBase = "http://localhost:8000/api/filmes";
  
    let url = urlBase;
    const token = localStorage.token;
    console.log(token)
  
    console.log("URL: " + url);
    const myInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    const myRequest = new Request(url, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        resposta.innerHTML = "Tem que realizar o login para aceder ao conteudo";
      } else {
        window.location.href = "http://localhost:8000/popular/thriller";  
      }
    });
  }

  async function topMystery(id) {
    const urlBase = "http://localhost:8000/api/filmes";
  
    let url = urlBase;
    const token = localStorage.token;
    console.log(token)
  
    console.log("URL: " + url);
    const myInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    const myRequest = new Request(url, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        resposta.innerHTML = "Tem que realizar o login para aceder ao conteudo";
      } else {
        window.location.href = "http://localhost:8000/popular/mystery";  
      }
    });
  }
  async function topCrime(id) {
    const urlBase = "http://localhost:8000/api/filmes";
  
    let url = urlBase;
    const token = localStorage.token;
    console.log(token)
  
    console.log("URL: " + url);
    const myInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    const myRequest = new Request(url, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        resposta.innerHTML = "Tem que realizar o login para aceder ao conteudo";
      } else {
        window.location.href = "http://localhost:8000/popular/crime";  
      }
    });
  }
  async function topSuperhero(id) {
    const urlBase = "http://localhost:8000/api/filmes";
  
    let url = urlBase;
    const token = localStorage.token;
    console.log(token)
  
    console.log("URL: " + url);
    const myInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    const myRequest = new Request(url, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        resposta.innerHTML = "Tem que realizar o login para aceder ao conteudo";
      } else {
        window.location.href = "http://localhost:8000/popular/superhero";  
      }
    });
  }
  async function topAnimation(id) {
    const urlBase = "http://localhost:8000/api/filmes";
  
    let url = urlBase;
    const token = localStorage.token;
    console.log(token)
  
    console.log("URL: " + url);
    const myInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    const myRequest = new Request(url, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        resposta.innerHTML = "Tem que realizar o login para aceder ao conteudo";
      } else {
        window.location.href = "http://localhost:8000/popular/animation";  
      }
    });
  }
  async function topComedy(id) {
    const urlBase = "http://localhost:8000/api/filmes";
  
    let url = urlBase;
    const token = localStorage.token;
    console.log(token)
  
    console.log("URL: " + url);
    const myInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    const myRequest = new Request(url, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        resposta.innerHTML = "Tem que realizar o login para aceder ao conteudo";
      } else {
        window.location.href = "http://localhost:8000/popular/comedy";  
      }
    });
  }