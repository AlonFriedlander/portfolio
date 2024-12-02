// "use client";
// import React from "react";
// import { MdEmail, MdFace } from "react-icons/md";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { Toaster, toast } from "react-hot-toast";

// interface IFormInput {
//   name: string;
//   email: string;
//   message: string;
// }

// const ContactForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IFormInput>();

//   const onSubmit: SubmitHandler<IFormInput> = async (data) => {
//     try {
//       const response = await fetch("/api/sendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         toast.success("Your email was sent successfully!", {
//           icon: "📧",
//           style: {
//             border: "1px solid #D1D5DB",
//             padding: "12px",
//             color: "#10B981",
//           },
//         });
//       } else {
//         toast.error("An error occurred while sending the email.", {
//           style: {
//             border: "1px solid #EF4444",
//             padding: "12px",
//             color: "#EF4444",
//           },
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("An unexpected error occurred.");
//     }
//   };

//   return (
//     <>
//       <form className="flex flex-col gap-4 w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
//         <label className="flex items-center gap-2">
//           <input
//             type="text"
//             className="input w-full"
//             placeholder="Full Name"
//             {...register("name", { required: "Name is required" })}
//           />
//           <MdFace />
//         </label>
//         {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

//         <label className="flex items-center gap-2">
//           <input
//             type="email"
//             className="input w-full"
//             placeholder="Email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
//                 message: "Invalid email address",
//               },
           
//             )}
//             />
//             <MdEmail />
//           </label>
//           {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
  
//           <textarea
//             className="textarea w-full"
//             placeholder="Message"
//             {...register("message", { required: "Message is required" })}
//           ></textarea>
//           {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
  
//           <button
//             type="submit"
//             className="btn btn-primary w-full mt-4"
//             disabled={Object.keys(errors).length > 0}
//           >
//             Send
//           </button>
//         </form>
//         <Toaster />
//       </>
//     );
//   };
  
//   export default ContactForm;
  