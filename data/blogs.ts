export interface Blog {
  id: string;
  title: string;
  blogSlug: string;
  image: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  tags: string[];
  readingTime: string;
  category: string;
  likes: number;
}

  
  export const blogs: Blog[] = [
    {
      "id": "88",
      "title": "The Importance of Vitamins in Daily Life",
      "blogSlug": "importance-of-vitamins",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxmrPZPvoiujrNHYKCLV5c8U2qYzGpU9Q3A&s",
      "content": "Vitamins are essential organic compounds that the human body requires in small amounts for a wide range of physiological functions. Each vitamin serves specific roles that support bodily processes, from cellular repair to immunity and energy production. For instance, Vitamin A is vital for eye health, Vitamin C boosts immunity and helps in collagen production, and Vitamin D is necessary for bone strength and calcium absorption.\n\nIncorporating a variety of foods in your daily diet—such as leafy greens, fruits, dairy, whole grains, and lean proteins—can ensure adequate vitamin intake. However, certain lifestyle factors, like poor eating habits, smoking, or chronic diseases, may lead to vitamin deficiencies. Deficiencies can result in fatigue, weakened immune systems, brittle bones, or even cognitive decline.\n\nWhile natural food sources are the best way to obtain vitamins, supplements can be helpful when dietary intake is insufficient or in special conditions like pregnancy, aging, or recovery from illness. It's important to consult a healthcare provider before taking supplements, as excessive intake of fat-soluble vitamins (A, D, E, K) can be toxic.\n\nIn today’s fast-paced world, people often rely on fast food and packaged items that are low in essential nutrients. Creating awareness about the importance of vitamins is crucial for public health. A balanced diet, combined with an active lifestyle, can prevent several chronic conditions, enhance mood, and promote longevity.\n\nWhether you're trying to maintain energy levels, support mental health, or reduce disease risk, ensuring adequate vitamin intake should be a top priority in your daily wellness routine.",
      "excerpt": "Explore how vitamins contribute to overall health and well-being.",
      "publishedAt": "2025-04-01",
      "author": "Dr. Ayesha Karim",
      "tags": ["Health", "Vitamins", "Wellness"],
      "readingTime": "5 min",
      "category": "Nutrition",
      "likes": 120
    },
    {
      "id": "89",
      "title": "Understanding Antibiotics and Their Uses",
      "blogSlug": "understanding-antibiotics",
      "image": "https://i0.wp.com/www.compoundchem.com/wp-content/uploads/2024/01/Classes-of-antibotics-2024.png?fit=1200%2C849&ssl=1",
      "content": "Antibiotics are medications specifically designed to treat bacterial infections by either killing the bacteria or inhibiting their growth. Since their discovery in the early 20th century, antibiotics have revolutionized modern medicine, making once-deadly infections treatable. However, their effectiveness is being challenged by the growing issue of antibiotic resistance.\n\nAntibiotic resistance occurs when bacteria mutate in response to the use of these drugs. This can happen when antibiotics are overused or misused—for instance, when they're prescribed for viral infections like the common cold, or when a patient doesn't complete the full prescribed course. The bacteria that survive become more resistant and harder to eliminate in future infections.\n\nTo preserve the efficacy of antibiotics, they should only be used when prescribed by a qualified healthcare professional. Self-medication or taking leftover antibiotics from previous illnesses can do more harm than good. Physicians usually select antibiotics based on the type of bacteria, the site of infection, and the patient's medical history.\n\nCommon bacterial infections treated with antibiotics include strep throat, urinary tract infections, bacterial pneumonia, and certain types of food poisoning. It’s important to note that antibiotics are not effective against viruses, such as those causing the flu or COVID-19.\n\nPublic health campaigns are now focusing on promoting awareness of responsible antibiotic use. Globally, governments and health organizations are pushing for policies that regulate antibiotic sales and promote research into new treatments.\n\nBy understanding how antibiotics work and using them correctly, individuals can contribute to slowing down antibiotic resistance, ensuring that these life-saving drugs remain effective for future generations.",
      "excerpt": "Learn how antibiotics work and why responsible usage is essential.",
      "publishedAt": "2025-04-05",
      "author": "Dr. Mahmood Rahman",
      "tags": ["Medicine", "Antibiotics", "Healthcare"],
      "readingTime": "5 min",
      "category": "Pharmacology",
      "likes": 94
    },
    {
      "id": "90",
      "title": "Herbal Medicine: Nature’s Healing Power",
      "blogSlug": "herbal-medicine-healing-power",
      "image": "https://iimtu.edu.in/blog/wp-content/uploads/2023/12/Naturo-13.jpg",
      "content": "Herbal medicine, also known as botanical medicine or phytotherapy, is the use of plants and plant extracts to treat illnesses and enhance health. This practice dates back thousands of years and is deeply rooted in many traditional medical systems like Ayurveda, Traditional Chinese Medicine (TCM), and Unani. Today, herbal remedies are gaining popularity globally as people seek more natural and holistic approaches to healthcare.\n\nCommonly used herbs include turmeric (anti-inflammatory), ginger (digestive aid), garlic (antibacterial), and echinacea (immune support). These herbs contain bioactive compounds that have therapeutic effects on the human body. For example, curcumin in turmeric has been shown to reduce inflammation and oxidative stress, while allicin in garlic can help lower blood pressure and cholesterol.\n\nDespite their natural origin, herbal medicines should be used with caution. Not all herbs are safe, especially when taken in large quantities or combined with pharmaceutical drugs. Some may cause allergic reactions, interfere with prescription medications, or worsen certain medical conditions. Therefore, it is crucial to consult a qualified herbalist or healthcare provider before beginning any herbal regimen.\n\nModern science continues to explore the efficacy of herbs through clinical trials and pharmacological research. Several pharmaceutical drugs have even been derived from plants, such as aspirin (from willow bark) and morphine (from the opium poppy). This highlights the potential of nature to provide powerful healing agents.\n\nAs interest in herbal medicine grows, so does the need for regulation and quality control. Consumers should choose products that are standardized, tested, and certified by reputable sources. When used correctly, herbal medicine can complement conventional treatments and support overall well-being in a safe and effective manner.",
      "excerpt": "Discover the benefits and cautions of herbal medicine in modern health.",
      "publishedAt": "2025-04-10",
      "author": "Dr. Saira Alam",
      "tags": ["Herbal", "Natural Remedies", "Alternative Medicine"],
      "readingTime": "5 min",
      "category": "Natural Health",
      "likes": 77
    },
    {
      "id": "91",
      "title": "The Role of Mental Health in Physical Wellness",
      "blogSlug": "mental-health-physical-wellness",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pfK19ksVDo72KTP2bOmDYtJ9yWGpinRrFA&s",
      "content": "Mental health plays a crucial role in shaping our physical well-being. Numerous studies have shown that stress, anxiety, and depression can have direct and long-term effects on the body, including high blood pressure, a weakened immune system, digestive issues, and even increased risk of heart disease. In contrast, maintaining positive mental health contributes to better physical health, improved sleep, and a longer life expectancy.\n\nThe mind-body connection is more than just a concept—it’s a scientific reality. For example, chronic stress triggers the release of cortisol, a hormone that, when elevated for prolonged periods, can disrupt almost every system in the body. It suppresses the immune response, increases inflammation, and may contribute to conditions like diabetes and arthritis.\n\nMental well-being also influences lifestyle behaviors. People who are mentally healthy are more likely to engage in physical activity, eat nutritious foods, and avoid harmful habits such as smoking or excessive drinking. Conversely, poor mental health can lead to self-neglect and harmful coping mechanisms.\n\nImproving mental health doesn’t always require medical intervention. Simple habits like regular exercise, meditation, maintaining social connections, journaling, and seeking professional help when needed can significantly boost emotional resilience. Access to mental healthcare and community support is also critical, especially for individuals facing chronic conditions or traumatic life events.\n\nIncorporating mental health awareness into daily life and public health policies is essential. A holistic approach that considers both psychological and physical aspects of wellness ensures better healthcare outcomes for individuals and communities alike.\n\nIn summary, caring for your mental health is not a luxury—it’s a necessity that directly impacts your physical vitality and overall quality of life.",
      "excerpt": "Explore how mental health influences your body and overall well-being.",
      "publishedAt": "2025-04-12",
      "author": "Dr. Tanvir Hossain",
      "tags": ["Mental Health", "Wellness", "Mind-Body"],
      "readingTime": "6 min",
      "category": "Health & Wellness",
      "likes": 145
    }
  ]
  
  
  