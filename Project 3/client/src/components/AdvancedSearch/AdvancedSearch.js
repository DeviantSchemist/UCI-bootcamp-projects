import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

// This component is used to render the filters under the search page

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  typography: {
    padding: theme.spacing(2),
  }
}))

const AdvancedSearch = props => {
  const classes = useStyles()

  // add any filter fields here so they can be tracked and updated
  const [breed, setBreed] = useState('')
  const [gender, setGender] = useState('')
  const [size, setSize] = useState('')
  const [age, setAge] = useState('')
  const [goodWithChildren, setGoodWithChildren] = useState(false)
  const [goodWithDogs, setGoodWithDogs] = useState(false)
  const [goodWithCats, setGoodWithCats] = useState(false)

  const handleBreedChange = (event) => {
    setBreed(event.target.value)
  }
  const handleGenderChange = (event) => {
    setGender(event.target.value)
  }
  const handleSizeChange = (event) => {
    setSize(event.target.value)
  }
  const handleAgeChange = (event) => {
    setAge(event.target.value)
  }
  const handleChildrenChange = (event) => {
    setGoodWithChildren(event.target.value)
  }
  const handleDogChange = (event) => {
    setGoodWithDogs(event.target.value)
  }
  const handleCatChange = (event) => {
    setGoodWithCats(event.target.value)
  }

// sends the filter data to the Search.js component
  const sendData = () => {
    props.parentCallback({
      breed: breed,
      gender: gender,
      size: size,
      age: age,
      good_with_children: goodWithChildren,
      good_with_dogs: goodWithDogs,
      good_with_cats: goodWithCats
    })
    console.log('Filters applied!')
  }

  useEffect(() => {
    sendData()
  }, [breed, gender, size, age, goodWithChildren, goodWithDogs, goodWithCats])

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Breed</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={breed}
          onChange={handleBreedChange}
        >
          <MenuItem value={''}>&nbsp;&nbsp;</MenuItem>
          <MenuItem value={'beagle'}>Beagle</MenuItem>
          <MenuItem value={'border-collie'}>Border Collie</MenuItem>
          <MenuItem value={'boxer'}>Boxer</MenuItem>
          <MenuItem value={'chihuahua'}>Chihuahua</MenuItem>
          <MenuItem value={'corgi'}>Corgi</MenuItem>
          <MenuItem value={'doberman'}>Doberman</MenuItem>
          <MenuItem value={'greyhound'}>Greyhound</MenuItem>
          <MenuItem value={'husky'}>Husky</MenuItem>
          <MenuItem value={'labrador'}>Labrador</MenuItem>
          <MenuItem value={'maltese'}>Maltese</MenuItem>
          <MenuItem value={'mixed'}>Mixed</MenuItem>
          <MenuItem value={'pit-bull'}>Pit Bull</MenuItem>
          <MenuItem value={'poodle'}>Poodle</MenuItem>
          <MenuItem value={'pug'}>Pug</MenuItem>
          <MenuItem value={'retriever'}>Retriever</MenuItem>
          <MenuItem value={'samoyed'}>Samoyed</MenuItem>
          <MenuItem value={'shepherd'}>Shepherd</MenuItem>
          <MenuItem value={'spaniel'}>Spaniel</MenuItem>
          <MenuItem value={'terrier'}>Terrier</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          onChange={handleGenderChange}
        >
          <MenuItem value={''}>&nbsp;&nbsp;</MenuItem>
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          onChange={handleSizeChange}
        >
          <MenuItem value={''}>&nbsp;&nbsp;</MenuItem>
          <MenuItem value={'small'}>Small</MenuItem>
          <MenuItem value={'medium'}>Medium</MenuItem>
          <MenuItem value={'large'}>Large</MenuItem>
          <MenuItem value={'xlarge'}>Extra Large</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleAgeChange}
        >
          <MenuItem value={''}>&nbsp;&nbsp;</MenuItem>
          <MenuItem value={'baby'}>Baby</MenuItem>
          <MenuItem value={'young'}>Young</MenuItem>
          <MenuItem value={'adult'}>Adult</MenuItem>
          <MenuItem value={'senior'}>Old</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Good w/ kids?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={goodWithChildren}
          onChange={handleChildrenChange}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Good w/ dogs?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={goodWithDogs}
          onChange={handleDogChange}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Good w/ cats?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={goodWithCats}
          onChange={handleCatChange}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default AdvancedSearch