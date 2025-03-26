export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-12 bg-white text-black">
            {/* Hero Section */}
            <section className="text-center">
                <h1 className="text-5xl font-bold">Who We Are</h1>
                <p className="text-lg mt-4 max-w-3xl mx-auto">
                    At MediStore, we are redefining the way you access healthcare. Our platform ensures seamless medicine delivery with authenticity, affordability, and customer-first service.
                </p>
            </section>

            {/* About Content */}
            <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 bg-black p-6 rounded-lg text-white text-lg shadow-lg">
                    <h3 className="text-2xl font-semibold">Fast, Secure, and Reliable</h3>
                    <p className="mt-4">
                        Our advanced logistics system ensures timely deliveries, while our encryption-backed transactions provide secure payments.
                    </p>
                    <p className="mt-4">
                        With 24/7 customer support, you can always count on us for a seamless healthcare experience.
                    </p>
                </div>
                <div className="md:w-1/2 bg-black p-6 rounded-lg text-white text-lg shadow-lg">
                    <h3 className="text-2xl font-semibold">Quality You Can Trust</h3>
                    <p className="mt-4">
                        We source our medicines from certified providers to ensure authenticity and quality in every order.
                    </p>
                    <p className="mt-4">
                    Your health and safety are our top priorities. Your health and safety are our top priorities.
                    </p>
                </div>
            </div>

            {/* Our Values */}
            <section className="mt-16">
                <h2 className="text-3xl font-semibold text-center">Our Core Values</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white shadow-md rounded-lg text-center border border-black">
                        <h3 className="text-xl font-semibold">Authenticity & Trust</h3>
                        <p className="mt-2">
                            We ensure genuine and certified medicines for your safety and well-being.
                        </p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg text-center border border-black">
                        <h3 className="text-xl font-semibold">Customer-First Approach</h3>
                        <p className="mt-2">
                            Your health comes first. Our 24/7 support is here to help anytime, anywhere.
                        </p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg text-center border border-black">
                        <h3 className="text-xl font-semibold">Innovation & Growth</h3>
                        <p className="mt-2">
                            We embrace technology to make healthcare more accessible and affordable.
                        </p>
                    </div>
                </div>
            </section>

          
            <section className="mt-16 bg-black py-12 rounded-lg text-white">
                <h2 className="text-3xl font-semibold text-center">Why Choose MediStore?</h2>
                <div className="mt-8 flex flex-col p-3 md:flex-row gap-8 justify-center">
                    <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md text-black">
                        <span className="text-4xl">✔</span>
                        <p className="text-lg">Fast & Reliable Medicine Delivery</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md text-black">
                        <span className="text-4xl">✔</span>
                        <p className="text-lg">100% Genuine & Certified Products</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md text-black">
                        <span className="text-4xl">✔</span>
                        <p className="text-lg">Secure Online Payment & COD Options</p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="mt-16 text-center">
                <h2 className="text-3xl font-semibold">Need Help?</h2>
                <p className="text-lg mt-3">
                    Our support team is available 24/7 to assist you.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-6">
                    <div className="p-4 bg-black text-white rounded-lg shadow-md">
                        <p>Email: support@medistore.com</p>
                    </div>
                    <div className="p-4 bg-black text-white rounded-lg shadow-md">
                        <p>Phone: +123-456-7890</p>
                    </div>
                    <div className="p-4 bg-black text-white rounded-lg shadow-md">
                        <p>Live Chat: Available 24/7</p>
                    </div>
                </div>
            </section>
        </div>
    );
}