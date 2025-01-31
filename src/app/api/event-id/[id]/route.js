export async function GET(request, {params}){
    try {
        const {id} = await params
                console.log(id, "pak Lucfi tanpa pemanis");
                
       
        const dataEvent = [
            {
              "id": 1,
              "title": "Tech Conference 2024",
              "description": "An insightful conference discussing the latest trends in technology.",
              "category": "Technology",
              "date": "2024-12-01",
              "location": "Jakarta",
              "image": "/images/tech-conference.jpg"
            },
            {
              "id": 2,
              "title": "Music Festival 2024",
              "description": "A grand festival featuring live performances from top artists.",
              "category": "Music",
              "date": "2024-11-20",
              "location": "Bandung",
              "image": "/images/music-festival.jpg"
            },
            {
              "id": 3,
              "title": "Startup Bootcamp 2024",
              "description": "A three-day bootcamp for budding entrepreneurs to develop their startup ideas.",
              "category": "Business",
              "date": "2024-10-15",
              "location": "Bali",
              "image": "/images/startup-bootcamp.jpg"
            },
            {
              "id": 4,
              "title": "Art Expo 2024",
              "description": "A showcase of contemporary and traditional art from local and international artists.",
              "category": "Art",
              "date": "2024-11-05",
              "location": "Yogyakarta",
              "image": "/images/art-expo.jpg"
            },
            {
              "id": 5,
              "title": "Fitness Challenge 2024",
              "description": "A community fitness event with various challenges and activities.",
              "category": "Health",
              "date": "2024-09-30",
              "location": "Surabaya",
              "image": "/images/fitness-challenge.jpg"
            },
            {
              "id": 6,
              "title": "Coding Marathon 2024",
              "description": "A 48-hour coding marathon for developers to create innovative solutions.",
              "category": "Technology",
              "date": "2024-08-20",
              "location": "Jakarta",
              "image": "/images/coding-marathon.jpg"
            },
            {
              "id": 7,
              "title": "Food Fiesta 2024",
              "description": "A celebration of global cuisines with live cooking shows and tastings.",
              "category": "Food",
              "date": "2024-07-25",
              "location": "Medan",
              "image": "/images/food-fiesta.jpg"
            },
            {
              "id": 8,
              "title": "Science Fair 2024",
              "description": "An interactive science exhibition for students and enthusiasts.",
              "category": "Education",
              "date": "2024-06-10",
              "location": "Bandung",
              "image": "/images/science-fair.jpg"
            },
            {
              "id": 9,
              "title": "Fashion Week 2024",
              "description": "A week-long showcase of the latest trends in fashion by renowned designers.",
              "category": "Fashion",
              "date": "2024-05-05",
              "location": "Jakarta",
              "image": "/images/fashion-week.jpg"
            },
            {
              "id": 10,
              "title": "Book Fair 2024",
              "description": "A book lover's paradise with author meet-and-greets and book launches.",
              "category": "Literature",
              "date": "2024-04-15",
              "location": "Semarang",
              "image": "/images/book-fair.jpg"
            },
            {
              "id": 11,
              "title": "Photography Workshop 2024",
              "description": "A hands-on workshop for aspiring photographers to enhance their skills.",
              "category": "Photography",
              "date": "2024-03-12",
              "location": "Makassar",
              "image": "/images/photography-workshop.jpg"
            },
            {
              "id": 12,
              "title": "Digital Marketing Summit 2024",
              "description": "An informative summit on the latest trends and strategies in digital marketing.",
              "category": "Business",
              "date": "2024-02-20",
              "location": "Jakarta",
              "image": "/images/digital-marketing-summit.jpg"
            }
        ]
 
        const resultData = dataEvent.find(el => el.id == id)
        console.log(id, "==> ini idnya");
        return new Response(
            JSON.stringify({
                data: resultData
            }),
            {status : 200}
        )
       
    } catch (error) {
        console.log(error);
        return new Response(
            JSON.stringify({
                message: "error"
            }),
            {status : 500}
        )
       
    }
}