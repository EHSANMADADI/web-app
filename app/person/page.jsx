import React from 'react'

export default function page() {
  return (
    <div className="form-body" dir="rtl">
    <div className="form-control">
      <h2 className="form-title">تقاضای همکاری</h2>
      <form action="/action_page.php">
        <div className="inpout-1">
          <label for="fname">لطفا نام خود را واردکنید</label>
          <input type="text" name="fname" id="fname" placeholder="Name" />
        </div>

        <div className="inpout-2">
          <label for="fname">لطفا مدرک و رشته تحصیلی خود را واردکنید</label>
          <input type="text" name="fname" id="fname" />
        </div>
        <div>
          <p>دورکاری یا حضوری در محل کار را ترجیخ میدهید؟</p>
          <input type="radio" id="remote" name="work" value="remote" />
          <label for="remote">دورکاری</label>

          <input type="radio" id="working" name="work" value="working" />
          <label for="working">حضوری</label>

          <input type="radio" id="does-not-matter" name="work" value="does-not-matter" />
          <label for="does-not-matter">فرقی ندارد</label>
        </div>
        <div className="selector">
          <label for="select">وضعیت تاهل :</label>
          <select name="setgender" id="select">
            <option value="single">مجرد</option>
            <option value="married">متاهل</option>
          </select>
        </div>

        <div className="form-massage">
          <label for="message">اگر نکته ای لازم است بگویید:</label>
          <textarea id="message"></textarea>
        </div>

        <div>
          <p>حوضه های علاقه مندی خود را مشخص کنید:</p>
          <input type="checkbox" id="interest1" name="web" value="web" />
          <label for="interest1">طراحی وبسایت</label>
          <input type="checkbox" id="interest2" name="support" value="support" />
          <label for="interest2"> پشتیبان فروش</label>
          <input type="checkbox" id="interest3" name="after-servises" value="after-servises" />
          <label for="interest3"> خدمات پس از فروش</label>
          <input type="checkbox" id="interest4" name="inventory" value="inventory" />
          <label for="interest4"> انبار داری</label>
        </div>
        <input type="submit" value="تایید" id="save" />

      </form>
    </div>


  </div>
  )
}
