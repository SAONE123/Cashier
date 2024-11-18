<?php

$con = pg_connect("host=localhost port=5432 dbname=postgres user=postgres password=admin");
if ($con) {
echo 'Connection attempt succeeded.';
} else {
echo 'Connection attempt failed.';
}
$query = "SELECT * FROM product";
$result = pg_query($con, $query);
// Check if the query succeeded
if ($result) {
    // Loop through and echo the results
    while ($row = pg_fetch_assoc($result)) {
        echo "<br/>";
        foreach ($row as $key => $value) {
            echo "$key: $value<br>";
        }
        echo "<hr>";
    }
} else {
    echo "Query failed: " . pg_last_error($con);
}
pg_close($con);