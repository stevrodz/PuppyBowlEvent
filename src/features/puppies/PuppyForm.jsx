import { useState } from "react";
import { useAddPuppyMutation } from "../../store/api"; // Import the mutation hook

/**
 * @component
 * Users can add puppies to the roster by submitting this form.
 */
export default function PuppyForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("https://loremflickr.com/200/300/dog"); // Placeholder image

  const [addPuppy, { isLoading, error }] = useAddPuppyMutation(); // Use the addPuppy mutation hook

  // Submit handler for the form
  function postPuppy(event) {
    event.preventDefault();

    // Create the new puppy object
    const newPuppy = {
      name,
      breed,
      imageUrl,
    };

    // Call the mutation to add the puppy to the roster
    addPuppy(newPuppy)
      .unwrap() // This allows us to handle the result or error
      .then(() => {
        // Clear the form fields after successful submission
        setName("");
        setBreed("");
      })
      .catch((err) => {
        // Handle errors if needed
        console.error("Failed to add puppy:", err);
      });
  }

  return (
    <>
      <h2>Add a Puppy</h2>
      <form onSubmit={postPuppy}>
        <label>
          Name
          <input
            name="puppyName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed
          <input
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add to Roster"}
        </button>
        {isLoading && <output>Uploading puppy information...</output>}
        {error && <output>{error.message}</output>}
      </form>
    </>
  );
}
