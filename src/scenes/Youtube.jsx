

const Youtube = ({ setSelectedPage }) => {
    return (
        <section
            id="about"
            className=""
        >
            <div class="aspect-w-16 aspect-h-9">

                    <iframe src="https://www.youtube.com/embed/VsTZikuF7V8" 
                        title="Vietnamese Collaborative MI" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        className="w-full aspect-video">                      
                    </iframe>
            </div>

        </section>
    );
};

export default Youtube;