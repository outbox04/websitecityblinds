-- Seed public catalogue and SEO content. Admin users should be created in Supabase Auth, then profiles inserted manually.
insert into categories (name, slug, description, sort_order) values
('Rem cau vong', 'rem-cau-vong', 'Dong rem hien dai cho showroom va can ho.', 1),
('Rem cuon', 'rem-cuon', 'Catalogue rem cuon van phong, nha pho, du an.', 2),
('Rem to ong', 'rem-to-ong', 'Giai phap cach nhiet va tham my cao.', 3),
('Rem nhua PVC', 'rem-nhua-pvc', 'Rem ben, de ve sinh cho khu vuc dac thu.', 4),
('Bat che nang', 'bat-che-nang', 'He bat che nang cho cong trinh va mat tien.', 5),
('Dong co rem tu dong', 'dong-co-rem-tu-dong', 'Dong co va phu kien dieu khien rem thong minh.', 6)
on conflict (slug) do nothing;

insert into post_categories (name, slug, description) values
('Kien thuc rem', 'kien-thuc-rem', 'Bai viet ho tro dai ly tu van rem.')
on conflict (slug) do nothing;

insert into products (category_id, name, slug, code, short_description, description, cover_image, gallery, specs, applications, is_featured)
select id, 'City Rainbow Premium', 'city-rainbow-premium', 'CB-RB-001',
'Rem cau vong hai lop vai, phu hop dai ly trung va cao cap.',
'Mau rem cau vong chu luc cho he thong dai ly City Blinds.',
'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&w=1200&q=80',
array['https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80'],
'{"Kho vai":"2.8m","Chat lieu":"Polyester","Bao hanh":"24 thang"}'::jsonb,
array['Can ho mau','Showroom noi that','Phong khach'],
true
from categories where slug = 'rem-cau-vong'
on conflict (slug) do nothing;

insert into site_settings (key, value) values
('site_title', '"City Blinds Vietnam"'::jsonb),
('site_description', '"San xuat va phan phoi rem B2B tai Viet Nam."'::jsonb),
('public_contact', '{"email":"partner@cityblinds.vn","phone":"0900 000 000"}'::jsonb)
on conflict (key) do nothing;
