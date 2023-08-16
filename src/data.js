export const showTab = (tabName, tabContents) => {
  tabContents.forEach(function (tab) {
    tab.style.display = "none";
  });
  const selectedTab = document.getElementById(tabName);
  selectedTab.style.display = "block";
};

export const actives = {
  removerActives: () => {
    document.querySelectorAll("a[data-tab]").forEach((link) => {
      link.classList.remove("active");
    });
  },
};
//se declara una constante como objeto para que este tenga muchas funciones dentro
export const filterImport = {
  // Se crea funcion para recibir data de peliculas y el nombre de productor
  // para volver a mostrar las peliculas se llama a la funcion createfilms
  // el parametro type es para filtrar por productor o director, se captura desde cada option
  // seleccionada
  filterForProducersAndDirectors: (films, name, type) => {
    if (name === "all" || name === "") {
      return films;
    }
    if (type === "prod") {
      return films.filter(function (film) {
        return film.producer === name;
      });
    } else {
      return films.filter(function (film) {
        return film.director === name;
      });
    }
  },
  filterForMovies: (films, movieTitle) => {
    if (movieTitle === "all" || movieTitle === "") {
      return films;
    } else {
      const dataFiltered = films.filter(function (film) {
        return film.title === movieTitle;
      });
      return dataFiltered;
    }
  },
  filterForCharacterGender: (people, genders) => {
    if (genders === "all" || genders === "") {
      return people;
    } else {
      const dataFiltered = people.filter(function (person) {
        return person.gender === genders;
      });
      return dataFiltered;
    }
  },
  filterForCharacterSpecie: (people, species) => {
    if (species === "all" || species === "") {
      return people;
    } else {
      const dataFiltered = people.filter(function (person) {
        return person.specie === species;
      });
      return dataFiltered;
    }
  },
  filterForVehicleClass: (vehicles, classes) => {
    if (classes === "all" || classes === "") {
      return vehicles;
    } else {
      const dataFiltered = vehicles.filter(function (vehicle) {
        return vehicle.vehicle_class === classes;
      });
      return dataFiltered;
    }
  },
  filterForLocationClimate: (locations, climates) => {
    if (climates === "all" || climates === "") {
      return locations;
    } else {
      const dataFiltered = locations.filter(function (location) {
        return location.climate === climates;
      });
      return dataFiltered;
    }
  },
  filterForLocationTerrain: (locations, terrains) => {
    if (terrains === "all" || terrains === "") {
      return locations;
    } else {
      const dataFiltered = locations.filter(function (location) {
        return location.terrain === terrains;
      });
      return dataFiltered;
    }
  },
};

export const orderImport = {
  sortAToZTitle: (data, tabActive) => {
    if (tabActive === "Movies") {
      return data.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1));
    } else if (tabActive === "Characters") {
      return data.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
    } else if (tabActive === "Vehicles") {
      return data.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
    } else {
      return data.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
    }
  },

  sortZToATitle: (data, tabActive) => {
    if (tabActive === "Movies") {
      return data.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1));
    } else if (tabActive === "Characters") {
      return data.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1));
    } else if (tabActive === "Vehicles") {
      return data.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1));
    } else {
      return data.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1));
    }
  },

  sortRDAsc: (data, tabActive) => {
    if (tabActive === "Movies") {
      return data.sort((a, b) => a.release_date - b.release_date);
    }
  },

  sortRDDesc: (data, tabActive) => {
    if (tabActive === "Movies") {
      return data.sort((a, b) => b.release_date - a.release_date);
    }
  },
};

// Se crea constante searchImport para iniciar una funcion de (filtro busqueda)
// searchFilmsByTitle esta funcion, tendra por parametro searchString
//haciendo referencia al valor que rescatara el input
// con if diremos "si el largo de este valor es mayor que 2"
// de la data retorname dicho elemento mayor a 2 string, (dentro de name)
// con toLowerCase estoy pasando la cadena de texto a una nueva que consta solo de letras minusculas
//Si no se cumple esta condicion, retornamos la data.
export const searchImport = {
  searchFilmsByTitle: (searchString, data) => {
    if (searchString.length > 2) {
      return data.filter((element) => {
        return element.title.toLowerCase().includes(searchString.toLowerCase());
      });
    }
    return data;
  },
  searchCharacterByName: (searchString, data) => {
    if (searchString.length > 2) {
      return data.filter((element) => {
        return element.name.toLowerCase().includes(searchString.toLowerCase());
      });
    }
    return data;
  },
  searchVehiclesByName: (searchString, data) => {
    if (searchString.length > 2) {
      return data.filter((element) => {
        return element.vehicle_class.toLowerCase().includes(searchString.toLowerCase());
      });
    }
    return data;
  },
  searchLocationsByName: (searchString, data) => {
    if (searchString.length > 2) {
      return data.filter((element) => {
        return element.name.toLowerCase().includes(searchString.toLowerCase());
      });
    }
    return data;
  },
};
