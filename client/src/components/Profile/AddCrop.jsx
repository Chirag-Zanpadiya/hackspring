import React, { useState } from "react";
import { useForm } from "react-hook-form";

function AddCrop() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const [images, setImages] = useState(["image-1"]);

  // Function to add new image input field
  const addImageField = () => {
    setImages([...images, `image-${images.length + 1}`]);
  };

  // Function to remove image input field
  const removeImageField = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Handle form submission
  const onSubmit = async (data) => {
    setError("");
    console.log("Crop Data Submitted:", data);
    // Here you can integrate API submission logic
  };

  return (
    <div className=" min-h-screen mx-auto ml-0 md:ml-[400px] mt-8 mb-8 bg-gray-100  ">
      <div className="mx-auto w-full max-w-lg bg-white rounded-xl p-10 border border-black/10">
        <h2 className="text-center text-2xl font-bold">Add Crop</h2>

        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
          {/* Crop Name Input */}
          <input
            {...register("cropName", { required: "Crop name is required" })}
            placeholder="Name of Crop"
            className="w-full p-2 border rounded"
          />
          {errors.cropName && <p className="text-red-500">{errors.cropName.message}</p>}

          {/* Crop Type Input */}
          <input
            {...register("cropType", { required: "Crop type is required" })}
            placeholder="Type of Crop"
            className="w-full p-2 border rounded"
          />
          {errors.cropType && <p className="text-red-500">{errors.cropType.message}</p>}

          {/* Image Upload Section */}
          <div className="space-y-2">
            <label className="block font-medium">Upload Images</label>
            {images.map((image, index) => (
              <div key={image} className="flex items-center space-x-2">
                <input
                  type="file"
                  {...register(`cropImages.${index}`, { required: index === 0 })}
                  onChange={(e) => setValue(`cropImages.${index}`, e.target.files[0])}
                  className="w-full p-2 border rounded"
                />
                {index > 0 && (
                  <button type="button" onClick={() => removeImageField(index)} className="text-red-500">
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={addImageField} className="text-blue-500">
              + Add Image
            </button>
          </div>

          {/* Fertilizer Input */}
          <input
            {...register("fertilizers", { required: "Fertilizer is required" })}
            placeholder="Fertilizer Used"
            className="w-full p-2 border rounded"
          />
          {errors.fertilizers && <p className="text-red-500">{errors.fertilizers.message}</p>}

          {/* Address Input */}
          <input
            {...register("address", { required: "Address is required" })}
            placeholder="Address of Farm"
            className="w-full p-2 border rounded"
          />
          {errors.address && <p className="text-red-500">{errors.address.message}</p>}

          {/* Quantity Input */}
          <input
            type="number"
            {...register("quantity", { required: "Quantity is required", min: 1 })}
            placeholder="Quantity in kgs"
            className="w-full p-2 border rounded"
          />
          {errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}

          {/* Market Price Input */}
          <input
            type="number"
            {...register("marketPrice", { required: "Market price is required", min: 1 })}
            placeholder="Market Price per kg"
            className="w-full p-2 border rounded"
          />
          {errors.marketPrice && <p className="text-red-500">{errors.marketPrice.message}</p>}

          {/* Your Price Input */}
          <input
            type="number"
            {...register("yourPrice", { required: "Your price is required", min: 1 })}
            placeholder="Your Price per kg"
            className="w-full p-2 border rounded"
          />
          {errors.yourPrice && <p className="text-red-500">{errors.yourPrice.message}</p>}

          {/* Submit Button */}
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCrop;
