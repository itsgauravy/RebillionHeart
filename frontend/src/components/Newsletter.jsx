import Title from '../components/Title';
import "../css/Newslettter.css";

function Newsletter() {
    return ( 
         <section className="container w-full h-[calc(100vh-6rem)]  flex align-middle justify-center">
            <Title heading="Newsletter" />  
            <div className="min-h-screen flex justify-center text-red-700 items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-3xl font-bold p-10">
      🎉 Tailwind is Working!
    </div>
            
        </section>
     );
}

export default Newsletter;  