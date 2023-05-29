

const History = ({ setSelectedPage }) => {
  return (
    <section
      id="history"
      className="text-center mt-8 md:h-full mb-10"
    >
        <h1 className="md:text-5xl xs:text-3xl font-playfair"> OUR HISTORY</h1>
        <div className="md:mt-8 xs:mt-4 justify-center">
            <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 mx-auto w-[80%]"
            src="assets/photos/history.jpg"
            />
        </div>
        <div>
            <h3 className="md:text-4xl xs:text-2xl bold pt-3 pb-4 font-mono">The Journey</h3>
            <div className="text-center font-thin w-[82%] mx-auto text-gray-300">
                <p className="pt-2">
                    Our non-profit organization has been dedicated to supporting underserved Vietnamese communities in Vietnam. With a clear mission to uplift and empower those in need, we have worked tirelessly to address the challenges faced by these communities. 
                </p>
                <p className="pt-2">
                    From the beginning, we recognized the importance of education in breaking the cycle of poverty. We have established schools, provided scholarships, and personally taught students with the skills and knowledge necessary for a brighter future. Through our efforts, we have witnessed countless lives transformed and dreams realized. 
                </p>
                <p className="pt-2">
                    In Vietnam, there are numerous underserved communities grappling with poverty, limited resources, and insufficient access to basic necessities. In such challenging circumstances, donating clothes and food emerges as a powerful act of compassion and solidarity. It goes beyond mere material assistance, as it holds the potential to transform lives and uplift communities. 
                </p>
            </div>

        </div>
    
    </section>
  );
};

export default History;