function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Повідомлення надіслано!");
  };

  return (
    <section id="contact">
      <h2>Зв'язатися зі мною</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Ваше ім'я:</label><br />
          <input type="text" id="fullName" name="fullName" placeholder="Олександр Іваненко" required />
        </div>
        <br />
        <div>
          <label htmlFor="email">Ваш Email:</label><br />
          <input type="email" id="email" name="email" placeholder="example@domain.com" required />
        </div>
        <br />
        <div>
          <label htmlFor="message">Повідомлення або пропозиція:</label><br />
          <textarea id="message" name="message" rows="4" cols="50" placeholder="Введіть ваше повідомлення..." required></textarea>
        </div>
        <br />
        <button type="submit">Надіслати</button>
      </form>
    </section>
  );
}

export default ContactForm;