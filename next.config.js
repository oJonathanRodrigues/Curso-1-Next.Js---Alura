module.exports = {
    trailingSlash: true, //adiciona barra em todo final da URL, ajuda no analytics
    async redirects() {
        return [
          {
            source: '/perguntas', //se acessar /perguntas vai direcionar para o FAQ
            destination: '/faq',
            permanent: true,
          },
        ];
      },
  };