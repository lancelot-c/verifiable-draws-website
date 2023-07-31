import { NextResponse } from 'next/server'
import { sendMailToMe } from "../../../services/mailService";

export async function POST(request: Request) {

    const body = await request.json()
    const firstName: string = body.firstName
    const lastName: string = body.lastName
    const company: string = body.company
    const email: string = body.email
    const phone: string = body.phone
    const message: string = body.message

    const subject: string = `${firstName} ${lastName} contacted you`

    const content = `First name: ${firstName}
Last name: ${lastName}
Company: ${company}
Email: ${email}
Phone: ${phone}

Message:
${message}`

    let error = false;

    try {

        if (firstName && lastName && email && message) {

            await sendMailToMe(
                subject,
                content
            );

        } else {
            error = true
        }

    } catch (err) {
        error = true;
        console.error(err);
    }
    
    
    const data = {
        error
    }

    return NextResponse.json(data)
}