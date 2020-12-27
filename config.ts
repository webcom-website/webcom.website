// index home
const siteMetadata = {
    title: `Webcom`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/ico.png`,
    icon: `/images/ico.png`,
    titleImage: `/images/walll.png`,
    titleImage2: `/images/walll.png`,
    ogImage: `/images/walll.png`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `DESARROLLO WEB PARA PEQUEÑAS & GRANDES EMPRESAS`,
    description: `Diseñamos & Desarrollamos Sitios Web & App Móviles. Creamos soluciones para tu entorno virtual ayudando a comunicar y compartir con el mundo tu transformación digital.`,
    about:
        "Hola! Somos Webcom Website una Agencia Boutique Interactiva. Desarrollamos Sitios Web, App Movile, Contenido Digital y Promocionamos tus Productos. \nEspecializados y apasionados por lo que hacemos conectamos a las marcas con su audiencia aumentando su visibilidad y consecuente crecimiento exponencial, logramos que su negocio o empresa se diferencie por el elegante, intuitivo y funcional diseño & desarrollo de su presencia onLine, generamos el impacto en el target que se ha marcado como objetivo y todo bajo una metodologia innovadora y eficiente utilizada por las grandes empresas    ( Facebook, Instagram, Linkedin, Twitter & + ) que permiten una mejor experiencia a su cliente, que es nuestra  prioridad.",
    author: `@andmininbad`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true, 
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "SERVICIOS", // content/basepage/about
            url: "/servicios",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "CONTACTO",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/webcom.website",
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/webcomwebsite",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/webcomwebsite/",
        },
      
       
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/f227a36e-096a-4c6a-9963-9f1918a85bb3",
        description: `PÓNGASE EN CONTACTO CON NOSOTROS || GET IN TOUCH WITH US.`,
        mail: "webcom.website@gmail.com",
        phone: "+54 9 11 35150202",
        address: "1650 \nBuenos Aires \nArgentina",
    },
    disqus: "Webcom.Website",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Ingresa un nombre",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Introduzca una dirección de correo electrónico válida",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Ingrese un mensaje con al menos 15 caracteres",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
