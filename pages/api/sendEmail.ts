// import type { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: parseInt(process.env.EMAIL_PORT || "587", 10),
//     secure: process.env.EMAIL_PORT === "465",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: `New Message from ${name}`,
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     });

//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error sending email" });
//   }
// }
