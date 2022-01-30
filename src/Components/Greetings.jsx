/* eslint-disable default-case */
function Greetings({ lang, children }) {
    switch (lang) {
      case 'de':
        return <p>Hallo {children}</p>;
      case 'fr':
        return <p>Bonjour {children}</p>;
      case 'es':
        return <p>Hola {children}</p>;
      case 'en':
        return <p>Hello {children}</p>;
    }
}

export default Greetings