import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2',breed: 'Sphynx' },
  { name: 'Mittens', age: '2',breed: 'Birman' },
  { name: 'Shadow', age: '1',breed: 'Bengal' },
  { name: 'Pumpkin', age: '3',breed: 'Persian' },
  { name: 'Luna', age: '4',breed: 'Abyssinian' },
  { name: 'Simba', age: '2',breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign them to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json()))
        );

        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleFilter = () => {
    const filtered = cats.filter((cat) => {
      const matchesBreed = selectedBreed ? cat.breed === selectedBreed : true;
      const matchesName = searchName ? cat.name.toLowerCase().includes(searchName.toLowerCase()) : true;
      return matchesBreed && matchesName;
    });
    setFilteredCats(filtered);
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mb-4">
        <div className="d-flex justify-content-center align-items-center gap-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <select
            className="form-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option value="">All Breeds</option>
            <option value="Sphynx">Sphynx</option>
            <option value="Peterbald">Peterbald</option>
            <option value="Birman">Birman</option>
            <option value="Abyssinian">Abyssinian</option>
            <option value="Persian">Persian</option>
            <option value="Bengal">Bengal</option>
            <option value="Siamese">Siamese</option>
          </select>

          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />

          <button className="btn btn-primary" onClick={handleFilter}>
            Search
          </button>
        </div>
      </div>

      <div className="mt-2 row g-5 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
