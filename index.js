 const miSwiper= document.getElementById("mi-swiper");

const fillData = async () => {
  const posts = await getData("https://jsonplaceholder.typicode.com/posts");
  const users = await getData("https://jsonplaceholder.typicode.com/users");
  console.log(users);
  console.log(posts);

  for (let i = 1; i <= 4; i++) {
    const introduccion = document.createElement("p");
    const nombre = document.createElement("p");
    const imagen = document.createElement("img")
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");
    imagen.classList.add("section_5_imagenperson");
    nombre.classList.add("nombre_testimonio");

    swiperSlide.appendChild(imagen);
    swiperSlide.appendChild(introduccion);
    swiperSlide.appendChild(nombre);
    miSwiper.appendChild(swiperSlide);
    imagen.src = `imagenes/person_${i}.jpg`;
    introduccion.innerText = `${
      posts.filter((post) => post.userId === i)[0].body
    }`;
    nombre.innerText = `${users.filter((user) => user.id === i)[0].name}`;
  }
};

async function getData(url = "", data = {}) {
  const response = await fetch(url);
  return response.json();
}

fillData();