export default function Projects() {
  return (
    <div id="projects" className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2 style={{ fontSize: 40, fontWeight: "bold" }}>Projects </h2>
          <i
            className="fas fa-code"
            style={{ fontSize: 35, marginBottom: 15 }}
          ></i>
          <p className="w-lg-50" style={{ fontSize: 20 }}>
            Curae hendrerit donec commodo hendrerit egestas tempus, turpis
            facilisis nostra nunc. Vestibulum dui eget ultrices.
          </p>
        </div>
      </div>
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div className="col">
          <div>
            <img
              className="rounded img-fluid d-block w-100 fit-cover"
              style={{ height: 200 }}
              src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
            />
            <div className="py-4">
              <h4>Sorting Algorithm Visualizer</h4>
              <p>
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                elit non mi porta gravida at eget metus.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <img
              className="rounded img-fluid d-block w-100 fit-cover"
              style={{ height: 200 }}
              src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
            />
            <div className="py-4">
              <h4>Web Chat Client</h4>
              <p>
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                elit non mi porta gravida at eget metus.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <img
              className="rounded img-fluid d-block w-100 fit-cover"
              style={{ height: 200 }}
              src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
            />
            <div className="py-4">
              <h4>Pathfinding Algorithm Visualizer</h4>
              <p>
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                elit non mi porta gravida at eget metus.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <img
              className="rounded img-fluid d-block w-100 fit-cover"
              style={{ height: 200 }}
              src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
            />
            <div className="py-4">
              <h4>Some other project here....</h4>
              <p>
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                elit non mi porta gravida at eget metus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
