import ContactUs from "../components/contact/ContactUs";
import Form from "../components/contact/Form";
import FrequentlyAskedQuestions from "../components/contact/FrequentlyAskedQuestions";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center my-24">
      <div className="flex flex-col gap-20">
        <div className="mbl:px-5">
          <h1 className="text-5xl font-bold mbl:text-3xl">
            Gostaríamos de ouvir você, <br /> Entre em contato 👋
          </h1>
        </div>
        <div>
          <div className="flex flex-col gap-36 w-[1150px] mbl:w-auto mbl:px-8">
            <Form />
            <ContactUs />
            <FrequentlyAskedQuestions />
          </div>
        </div>
      </div>
    </main>
  );
}
