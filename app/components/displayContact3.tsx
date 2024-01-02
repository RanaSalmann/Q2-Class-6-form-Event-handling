import {contactInfoTypes} from "@/types/form"

export default function displayContact3 (props:{contactInfos:contactInfoTypes[]}) {
    return (
        <div>
            <center>
                <table style={{border: '1px solid black'}}>
                    <tr>
                        <th style={{border: '2px solid black'}}>User Name</th>
                        <th style={{border: '2px solid black'}}>Email</th>
                        <th style={{border: '2px solid black'}}>Phone</th>
                        <th style={{border: '2px solid black'}}>Message</th>
                    </tr>
                    {props.contactInfos.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td style={{border: '1px solid black'}}>{item.userName}</td>
                                <td style={{border: '1px solid black'}}>{item.email}</td>
                                <td style={{border: '1px solid black'}}>{item.phone}</td>
                                <td style={{border: '1px solid black'}}>{item.onmessage}</td>
                            </tr>
                        )
                    })}
                </table>
            </center>
        </div>
    );
}
