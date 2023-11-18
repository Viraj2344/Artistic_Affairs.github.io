import React from 'react';

const ImageGrid = () => {
  // You can replace these image URLs and links with your own data.
  const images = [
    { src: 'https://ktusu.in/cdn/shop/files/soft-tpu-protective-inner-microfiber-cloth-phone-back-case-cover-for-apple-iphone-cases-covers-30219788091492.jpg?v=1697025024', link: 'https://example.com/link1' },
    { src: 'https://www.printbebo.in/wp-content/uploads/2022/04/151-You-Are-My-Pillow-Cute-Couple-Phone-Case.jpg', link: 'https://example.com/link2' },
    { src: 'https://i.pinimg.com/736x/f4/68/b8/f468b87def23dd7e25c6ea35dbcccb2b.jpg', link: 'https://example.com/link3' },
    { src: 'https://i.etsystatic.com/15320292/r/il/3945ab/3481193322/il_570xN.3481193322_4ddl.jpg', link: 'https://example.com/link4' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-7">
      {images.map((image, index) => (
        <a
          key={index}
          href={image.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden bg-gray-100 hover:bg-gray-300 rounded-lg transition duration-300 transform hover:scale-105 md:col-span-1"
          style={{ height: '100%' }} // Set a fixed height
        >
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover" // Use object-cover to fit the image within the fixed height
          />
        </a>
      ))}
    </div>
  );
};

export default ImageGrid;
