import {Box, FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@material-ui/core";
import React from "react";

export default function SelectTestComponent() {

  const [age, setAge] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <Box m={8}>
      <FormControl>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          data-testid={"demo-simple-select-helper-id"}
          onChange={handleChange}
          SelectDisplayProps={{
            // @ts-ignore
            "data-testid": `demo-simple-select-helper-data-testid`
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem data-testid="ten" value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText data-testid={"demo-simple-select-helper-value"}>Selected option is {age}</FormHelperText>
      </FormControl>
    </Box>
  );
}