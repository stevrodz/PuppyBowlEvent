import { useGetPuppyQuery, useDeletePuppyMutation } from "../../store/api";
/*
 * @component
 * Shows comprehensive information about the selected puppy, if there is one.
 * Also provides a button for users to remove the selected puppy from the roster.
 */
export default function PuppyDetails({ selectedPuppyId, setSelectedPuppyId }) {
  const { data: player, isLoading, isError } = useGetPuppyQuery(selectedPuppyId);
  const [deletePuppy, { isLoading: isDeleting }] = useDeletePuppyMutation();
  // TODO: Grab data from the `getPuppy` query

  // TODO: Use the `deletePuppy` mutation to remove a puppy when the button is clicked

  function removePuppy(id) {
    deletePuppy(id).unwrap()
      .then(() => {
        setSelectedPuppyId(null); // Clear the selected puppy after removal
      })
      .catch((error) => {
        console.error("Failed to delete puppy:", error);
      });
  }

  // There are 3 possibilities:
  let $details;
  // 1. A puppy has not yet been selected.
  if (!selectedPuppyId) {
    $details = <p>Please select a puppy to see more details.</p>;
  }
  //  2. A puppy has been selected, but results have not yet returned from the API.
  else if (isLoading) {
    $details = <p>Loading puppy information...</p>;
  }
  // 3. Information about the selected puppy has returned from the API.
  else if (isError) {
    $details = <p>Failed to load puppy details.</p>;
  } else {
    $details = (
      <>
       
        <h3>
          {player.name} #{player.id}
        </h3>
        <p>{player.breed}</p>
       
        <p>Team {player.team?.name ?? "Unassigned"}</p>
        <button onClick={() => removePuppy(player.id)}disabled={isDeleting}>
        {isDeleting ? 'Removing...' : 'Remove from roster'}Remove from roster
        </button>
        <figure>
          <img src={player.imageUrl} alt={player.name} />
        </figure>
      </>
    );
  }

  return (
    <aside>
      <h2>Selected Puppy</h2>
      {$details}
    </aside>
  );
}
