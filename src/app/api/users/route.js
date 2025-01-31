export function GET(){
    let users = ["Amjas","Febri","Teo"]

    return new Response(
        JSON.stringify({
            data: users
        },
    {
        status: 200,
        headers: {
            "Content-Type": "application/"
        }
    }
    )
    )
}
export async function POST(request) {

}