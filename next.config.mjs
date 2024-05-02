/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // reactStrictMode:true,
        // swcMinify:true,
         unoptimized:true,
         domains: ['api.slingacademy.com', 'images.unsplash.com' , 'dummyimage.com' , 'flowbite.s3.amazonaws.com' ,'img.freepik.com' ,'https://schema.org/']
       },

};

export default nextConfig;


