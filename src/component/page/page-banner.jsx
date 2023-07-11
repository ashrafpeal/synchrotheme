export default function Page_Banner({ title }) {
  return (
    <section class="page_banner_wrap d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center">
            <div class="page_banner text-center mt-5">
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
