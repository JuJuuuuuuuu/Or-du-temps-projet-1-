--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: panier; Type: TABLE; Schema: public; Owner: or_du_temps
--

CREATE USER or_du_temps WITH PASSWORD 'or_du_temps' CREATEDB;

CREATE TABLE public.panier (
    id integer NOT NULL,
    id_produit integer NOT NULL,
    quantite integer NOT NULL
);


ALTER TABLE public.panier OWNER TO or_du_temps;

--
-- Name: panier_id_seq; Type: SEQUENCE; Schema: public; Owner: or_du_temps
--

CREATE SEQUENCE public.panier_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.panier_id_seq OWNER TO or_du_temps;

--
-- Name: panier_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: or_du_temps
--

ALTER SEQUENCE public.panier_id_seq OWNED BY public.panier.id;


--
-- Name: produits; Type: TABLE; Schema: public; Owner: or_du_temps
--

CREATE TABLE public.produits (
    id integer NOT NULL,
    nom character varying(255) NOT NULL,
    prix numeric(10,2) NOT NULL,
    stock integer NOT NULL,
    description text NOT NULL,
    image character varying(255) NOT NULL
);


ALTER TABLE public.produits OWNER TO or_du_temps;

--
-- Name: produit_id_seq; Type: SEQUENCE; Schema: public; Owner: or_du_temps
--

CREATE SEQUENCE public.produit_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.produit_id_seq OWNER TO or_du_temps;

--
-- Name: produit_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: or_du_temps
--

ALTER SEQUENCE public.produit_id_seq OWNED BY public.produits.id;


--
-- Name: panier id; Type: DEFAULT; Schema: public; Owner: or_du_temps
--

ALTER TABLE ONLY public.panier ALTER COLUMN id SET DEFAULT nextval('public.panier_id_seq'::regclass);


--
-- Name: produits id; Type: DEFAULT; Schema: public; Owner: or_du_temps
--

ALTER TABLE ONLY public.produits ALTER COLUMN id SET DEFAULT nextval('public.produit_id_seq'::regclass);


--
-- Data for Name: panier; Type: TABLE DATA; Schema: public; Owner: or_du_temps
--

COPY public.panier (id, id_produit, quantite) FROM stdin;
\.


--
-- Data for Name: produits; Type: TABLE DATA; Schema: public; Owner: or_du_temps
--

COPY public.produits (id, nom, prix, stock, description, image) FROM stdin;
10	Zoé	70.00	6	Catégorie: Boucles d’oreilles\nType: OR et diamant\nTaille: Unique\nStyle: Tendance\nOccasion: Toutes	zoe.jpg
4	Sophie	35.00	5	Catégorie: Colliers\nType: Plaqué OR et Perles\nTaille: Unique\nStyle: Tendance\nOccasion: Soirée	sophie.jpg
14	Lily	125.00	3	Catégorie: Bracelets\nType: OR\nTaille: S (15-16cm), M (17- 18cm), L (18-19 cm)\nStyle: Moderne\nOccasion: Cadeau	lily.jpg
15	Valentine	140.00	4	Catégorie: Bracelets\nType: OR\nTaille: S (15-16cm), M (17- 18cm), L (18-19 cm)\nStyle: Classique\nOccasion: Cadeau	valentine.jpg
16	Carla	90.00	9	Catégorie: Bracelets\nType: OR et Perles\nTaille: S (15-16cm), M (17- 18cm), L (18-19 cm)\nStyle: Tendance\nOccasion: Cadeau	carla.jpg
17	Tess	25.00	11	Catégorie: Bagues\nType: plaqué OR\nTaille: 46,48,50,52\nStyle: Fantaisie\nOccasion: Toutes	tess.jpg
18	Trendy	90.00	15	Catégorie: Bagues\nType: OR\nTaille: 46,48,50,52\nStyle: Tendance\nOccasion: Soirée	trendy.jpg
19	Les 3 Or	170.00	2	Catégorie: Bagues\nType: OR rose, jaune et blanc\nTaille: 46,48,50,52\nStyle: Tendance\nOccasion: Soirée	les_3_or.jpg
20	Stella	125.00	7	Catégorie: Bagues\nType: OR Rose et Quartz\nTaille: 46,48,50,52\nStyle: Classique\nOccasion: Fiançailles	stella.jpg
13	Serpentine	25.00	4	Catégorie: Bracelets\nType: Plaqué OR et diamant\nTaille: S (15-16cm), M (17- 18cm), L (18-19 cm)\nStyle: Moderne\nOccasion: Fiançailles	serpentine.jpg\n
12	Pretty	10.00	5	Catégorie: Boucles d’oreilles\nType: Plaqué OR et perles\nTaille: Unique \nStyle: Fantaisie \nOccasion: Toutes	pretty.jpg
8	Lyana	80.00	2	Catégorie: Boucles d’oreilles\nType: OR et diamants\nTaille: Unique\nStyle: Tendance\nOccasion: Soirée	lyana.jpg
6	Céleste	170.00	3	Catégorie: triple chaîne\nType: OR et diamant\nTaille: Unique\nStyle: Moderne\nOccasion: Cadeau	celeste.jpg
2	Fanny	25.00	4	Catégorie: Colliers double chaîne\nType: Plaqué OR \nTaille: Unique \nStyle: Fantaisie \nOccasion: Cadeau	fanny.jpg
1	Mia	120.00	2	Catégorie: Colliers\nType: OR\nTaille: Unique\nStyle: Tendance\nOccasion: Soirée	mia.jpg
5	Emma	65.00	4	Catégorie: Colliers double chaine\nType: OR\nTaille: Unique\nStyle: Classique\nOccasion: Cadeau	emma.jpg
7	Créole Bohème	40.00	7	Catégorie: Boucles d’oreilles\nType: Plaqué OR\nTaille: Unique\nStyle: Tendance\nOccasion: Cadeau	creole_boheme.jpg
9	Lila	120.00	8	Catégorie: Boucles d’oreilles\nType: OR et diamant\nTaille: Unique\nStyle: Moderne\nOccasion: Fiançailles	lila.jpg
11	Starlight	20.00	4	Catégorie: Boucles d’oreilles\nType: Plaqué OR\nTaille: Unique\nStyle: Fantaisie\nOccasion: Toutes	starlight.jpg
3	Léa	150.00	9	Catégorie: Colliers\nType: OR\nTaille: Unique\nStyle: Moderne\nOccasion: Fiançailles	lea.jpg
\.


--
-- Name: panier_id_seq; Type: SEQUENCE SET; Schema: public; Owner: or_du_temps
--

SELECT pg_catalog.setval('public.panier_id_seq', 21, true);


--
-- Name: produit_id_seq; Type: SEQUENCE SET; Schema: public; Owner: or_du_temps
--

SELECT pg_catalog.setval('public.produit_id_seq', 11, true);


--
-- Name: panier panier_id_produit_key; Type: CONSTRAINT; Schema: public; Owner: or_du_temps
--

ALTER TABLE ONLY public.panier
    ADD CONSTRAINT panier_id_produit_key UNIQUE (id_produit);


--
-- Name: panier panier_pkey; Type: CONSTRAINT; Schema: public; Owner: or_du_temps
--

ALTER TABLE ONLY public.panier
    ADD CONSTRAINT panier_pkey PRIMARY KEY (id);


--
-- Name: produits produit_pkey; Type: CONSTRAINT; Schema: public; Owner: or_du_temps
--

ALTER TABLE ONLY public.produits
    ADD CONSTRAINT produit_pkey PRIMARY KEY (id);


--
-- Name: panier panier_id_produit_fkey; Type: FK CONSTRAINT; Schema: public; Owner: or_du_temps
--

ALTER TABLE ONLY public.panier
    ADD CONSTRAINT panier_id_produit_fkey FOREIGN KEY (id_produit) REFERENCES public.produits(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT ALL ON SCHEMA public TO or_du_temps;


--
-- PostgreSQL database dump complete
--

