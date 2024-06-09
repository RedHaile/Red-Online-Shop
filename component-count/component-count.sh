#!/bin/bash

# Check if the correct number of arguments is provided
if [ $# -lt 1 ]; then
    echo "Usage: ./component-count.sh <directory-of-react-project> [Nav Home Footer ...]"
    exit 1
fi

# Get the directory of the React project
project_directory="$1"

# Check if the directory exists
if [ ! -d "$project_directory" ]; then
    echo "Error: Directory $project_directory does not exist"
    exit 1
fi

echo "Changing directory to $project_directory"
cd "$project_directory" || { echo "Error: Cannot change directory to $project_directory"; exit 1; }

# Initialize an associative array to store component counts
declare -A component_counts

# Get the list of component names to count occurrences for (if provided)
if [ $# -gt 1 ]; then
    shift
    component_names=("$@")
else
    echo "Error: No component names provided"
    exit 1
fi

echo "Component Names: ${component_names[@]}"

# Function to count occurrences of a component in files
count_component_occurrences() {
    local component="$1"
    echo "Searching for occurrences of component: $component"
    local count=$(grep -r -o "\b$component\b" ./* | wc -l)
    echo "Occurrences found for component $component: $count"
    echo "$count"
}

# Loop through the component names and count occurrences for each
for component in "${component_names[@]}"; do
    echo "Counting occurrences for component: $component"
    count=$(count_component_occurrences "$component")
    echo "Count for $component: $count"
    component_counts["$component"]=$count
done

# Print the component counts
index=1
echo "Final component counts:"
for component in "${!component_counts[@]}"; do
    echo "$index. $component - ${component_counts[$component]}"
    ((index++))
done
