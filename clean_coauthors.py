import json
import re

# Load database
with open(r"c:\Users\Usuário\Dropbox\Fred\Antigravity\Perfil Fred\profile_data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Comprehensive standardization mapping for clean, premium names
name_standard_map = {
    # Frederico Ribeiro Neto
    "neto, f. r.": "Frederico Ribeiro Neto",
    "ribeiro neto, frederico": "Frederico Ribeiro Neto",
    "neto, frederico ribeiro": "Frederico Ribeiro Neto",
    "ribeiro neto, f.": "Frederico Ribeiro Neto",
    "neto, frederico": "Frederico Ribeiro Neto",
    "ribeiro-neto, f.": "Frederico Ribeiro Neto",
    "ribeiro neto": "Frederico Ribeiro Neto",
    "neto, f r": "Frederico Ribeiro Neto",
    "ribeironeto, frederico": "Frederico Ribeiro Neto",
    "neto, frederico r.": "Frederico Ribeiro Neto",
    "neto, f. r.": "Frederico Ribeiro Neto",

    # Rodrigo Rodrigues Gomes Costa
    "gomes costa, r. r.": "Rodrigo R. Gomes Costa",
    "gomes costa, rodrigo": "Rodrigo R. Gomes Costa",
    "gomes costa, rodrigo rodrigues": "Rodrigo R. Gomes Costa",
    "gomes costa, rodrigo r.": "Rodrigo R. Gomes Costa",
    "gomes costa": "Rodrigo R. Gomes Costa",
    "costa, rodrigo rodrigues gomes": "Rodrigo R. Gomes Costa",
    "costa, rodrigo rodrigues": "Rodrigo R. Gomes Costa",
    "costa, r. r. g.": "Rodrigo R. Gomes Costa",
    "costa, rodrigo rodrigues gomes, lopes": "Rodrigo R. Gomes Costa", # clean typo in Pub 46
    "gomes costa, rodrigorodrigues": "Rodrigo R. Gomes Costa",
    "costa, rodrigorodrigues gomes": "Rodrigo R. Gomes Costa",
    "costa, r. r. g.": "Rodrigo R. Gomes Costa",

    # Ciro Winckler
    "winckler, c.": "Ciro Winckler",
    "winckler, ciro": "Ciro Winckler",
    "winckler": "Ciro Winckler",

    # Jefferson Rodrigues Dorneles
    "dorneles, j. r.": "Jefferson R. Dorneles",
    "dorneles, jefferson": "Jefferson R. Dorneles",
    "dorneles, jefferson rodrigues": "Jefferson R. Dorneles",
    "dornéles, jefferson": "Jefferson R. Dorneles",
    "dornéles, j. r.": "Jefferson R. Dorneles",
    "dorneles, jeffersonrodrigues": "Jefferson R. Dorneles",
    "rodrigues dorneles, jefferson": "Jefferson R. Dorneles",
    "dornelas, e.": "Elisa Dornelas",
    "dornelas, elisa": "Elisa Dornelas",

    # João Henrique Carneiro Leão Veloso
    "veloso, j. h. c. l.": "João H. C. L. Veloso",
    "veloso, joão henrique": "João H. C. L. Veloso",
    "veloso, joão henrique carneiro leão": "João H. C. L. Veloso",
    "veloso (j. h. c. l.)": "João H. C. L. Veloso",
    "carneiro leão veloso, joão henrique": "João H. C. L. Veloso",
    "veloso, joão hcl": "João H. C. L. Veloso",
    "veloso, joão h. c. l.": "João H. C. L. Veloso",

    # Carlos Wellington Passos Gonçalves
    "gonçalves, c. w. p.": "Carlos W. P. Gonçalves",
    "gonçalves, carlos wellington": "Carlos W. P. Gonçalves",
    "gonçalves, carlos wellington passos": "Carlos W. P. Gonçalves",
    "passos gonçalves, c. w.": "Carlos W. P. Gonçalves",
    "gonçalves, carlos wp": "Carlos W. P. Gonçalves",
    "gonçalves, carlos w.": "Carlos W. P. Gonçalves",

    # Sonny Allan Silva Bezerra
    "bezerra, s. a.": "Sonny A. S. Bezerra",
    "silva bezerra, s. a.": "Sonny A. S. Bezerra",
    "bezerra, sonny allan": "Sonny A. S. Bezerra",
    "silva bezerra, sonny allan": "Sonny A. S. Bezerra",

    # Gustavo Henrique Costa Bezerra
    "bezerra, g. c.": "Gustavo H. C. Bezerra",
    "bezerra, gustavo c.": "Gustavo H. C. Bezerra",
    "bezerra, gustavo henrique": "Gustavo H. C. Bezerra",
    "bezerra, g. h.": "Gustavo H. C. Bezerra",
    "costa bezerra, gustavo henrique": "Gustavo H. C. Bezerra",

    # Felipe J. Aidar
    "aidar, f. j.": "Felipe J. Aidar",
    "aidar, felipe j.": "Felipe J. Aidar",
    "aidar, felipe": "Felipe J. Aidar",

    # Rodrigo Luiz Carregaro
    "carregaro, r. l.": "Rodrigo L. Carregaro",
    "carregaro, rodrigo luiz": "Rodrigo L. Carregaro",
    "carregaro, rodrigo l.": "Rodrigo L. Carregaro",
    "carregaro rl": "Rodrigo L. Carregaro",

    # Juliane Machado Marques
    "marques, j. m.": "Juliane M. Marques",
    "machado marques, j.": "Juliane M. Marques",
    "machado marques, juliane": "Juliane M. Marques",
    "marques, juliane machado": "Juliane M. Marques",

    # Luiz Gustavo Teixeira Fabricio dos Santos
    "fabricio dos santos, l. g. t.": "Luiz Gustavo T. F. Santos",
    "fabricio dos santos, l. g.": "Luiz Gustavo T. F. Santos",
    "santos, l. g.": "Luiz Gustavo T. F. Santos",
    "santos, luíz gustavo": "Luiz Gustavo T. F. Santos",
    "dos santos, luiz gustavo teixeira fabricio": "Luiz Gustavo T. F. Santos",

    # Luis Felipe Castelli Correia de Campos
    "campos, l. f. c.": "Luis Felipe C. C. Campos",
    "campos, l. f.": "Luis Felipe C. C. Campos",
    "castelli correiade campos, luis felipe": "Luis Felipe C. C. Campos",
    "de campos, luis felipe castelli correa": "Luis Felipe C. C. Campos",

    # Lauro C. Vianna
    "vianna, l. c.": "Lauro C. Vianna",
    "vianna, lauro c.": "Lauro C. Vianna",

    # Marcela S. Araújo
    "araujo, m. s.": "Marcela S. Araújo",
    "araújo, marcela s.": "Marcela S. Araújo",

    # Rafael Lima Kons
    "kons, r. l.": "Rafael Lima Kons",
    "kons, rafael lima": "Rafael Lima Kons",

    # Guilherme Felix
    "felix, g.": "Guilherme Felix",
    "felix, guilherme": "Guilherme Felix",

    # Vinicius de Oliveira Guliás
    "guliás, v. o.": "Vinicius de Oliveira Guliás",
    "guliás, vinicius de oliveira": "Vinicius de Oliveira Guliás",

    # Elke Lima Trigo
    "trigo, e. l.": "Elke Lima Trigo",
    "trigo, elke lima": "Elke Lima Trigo",

    # Irineu Loturco
    "loturco, i.": "Irineu Loturco",
    "loturco, irineu": "Irineu Loturco",

    # Andrea Jacusiel Miranda
    "miranda, a. j.": "Andrea Jacusiel Miranda",
    "miranda, andrea jacusiel": "Andrea Jacusiel Miranda",

    # Beatriz Lucena Ramos
    "ramos, b. l.": "Beatriz Lucena Ramos",
    "ramos, beatriz lucena": "Beatriz Lucena Ramos",

    # Bob O'Shea
    "o?shea, bob": "Bob O'Shea",
    "oshea, bob": "Bob O'Shea",

    # José Irineu Gorla
    "irineugorla, josé": "José Irineu Gorla",
    "gorla, josé irineu": "José Irineu Gorla",

    # Poliana Grasser
    "grasser, poliana": "Poliana Grasser",

    # Maria de Fátima Fernandes Vara
    "fernandes vara, maria de fátima": "Maria de Fátima Fernandes Vara",
    "fernandes vara, maria de ftima": "Maria de Fátima Fernandes Vara",

    # Matheus Brasiliano da Paz
    "brasiliano da paz, matheus": "Matheus Brasiliano da Paz",
    "brasiliano da paz, m.": "Matheus Brasiliano da Paz",

    # Eduardo Boiteux Uchôa Cavalcanti
    "boiteux uchôa cavalcanti, eduardo": "Eduardo Boiteux Uchôa Cavalcanti",
    "boiteux ucha cavalcanti, eduardo": "Eduardo Boiteux Uchôa Cavalcanti",

    # Edilson F. Dantas
    "dantas, edilson f.": "Edilson F. Dantas",

    # Paulo F. Almeida-Neto
    "almeida-neto, paulo f.": "Paulo F. Almeida-Neto",
    "almeida-neto, paulo francisco de": "Paulo F. Almeida-Neto",
    "de almeida-neto, paulo francisco": "Paulo F. Almeida-Neto",
    "almeida-neto, paulo francisco de": "Paulo F. Almeida-Neto",

    # Nuno D. Garrido
    "garrido, nuno d.": "Nuno D. Garrido",
    "d. garrido, nuno": "Nuno D. Garrido",
    "garrido, nunodomingos": "Nuno D. Garrido",

    # Breno G. Cabral
    "cabral, breno g.": "Breno G. Cabral",
    "cabral, breno guilherme de araújo tinôco": "Breno G. Cabral",
    "de araújo tinoco cabral, breno guilherme": "Breno G. Cabral",
    "cabral, brenoguilherme de araújo tinoco": "Breno G. Cabral",

    # Tiago Figueiredo
    "figueiredo, tiago": "Tiago Figueiredo",

    # Victor M. Reis
    "reis, victor m.": "Victor M. Reis",
    "reis, victor machado": "Victor M. Reis",

    # Ciro José Brito
    "brito, ciro josé": "Ciro José Brito",
    "brito, ciro jos": "Ciro José Brito",

    # Dihogo Gama de Matos
    "de matos, dihogo gama": "Dihogo Gama de Matos",
    "matos, dihogo gama de": "Dihogo Gama de Matos",

    # Levy Anthony S. de Oliveira
    "de oliveira, levy anthony s.": "Levy Anthony S. de Oliveira",

    # Raphael Fabrício de Souza
    "de souza, raphael fabrício": "Raphael Fabrício de Souza",
    "de souza, rapahelfabrício": "Raphael Fabrício de Souza",
    "souza, raphael fabricio": "Raphael Fabrício de Souza",

    # Henrique P. Neiva
    "neiva, henrique p.": "Henrique P. Neiva",

    # Daniel A. Marinho
    "marinho, daniel a.": "Daniel A. Marinho",

    # Mário C. Marques
    "marques, mário c.": "Mário C. Marques",
    "marques, mrio c.": "Mário C. Marques",

    # Filipe Manuel Clemente
    "clemente, filipe manuel": "Filipe Manuel Clemente",

    # Hadi Nobari
    "nobari, hadi": "Hadi Nobari",

    # Larissa Santana
    "santana, larissa": "Larissa Santana",

    # Emerson Fachin-Martins
    "fachin-martins, emerson": "Emerson Fachin-Martins",

    # David Lobato Borges
    "borges, david lobato": "David Lobato Borges",

    # Jonathan Galvão Tenório Cavalcante
    "tenório cavalcante, jonathan galvão": "Jonathan Galvão Tenório Cavalcante",
    "tenrio cavalcante, jonathan galvo": "Jonathan Galvão Tenório Cavalcante",

    # Nicolas Babault
    "babault, nicolas": "Nicolas Babault",

    # João Luiz Quagliotti Durigan
    "quagliotti durigan, joão luiz": "João Luiz Quagliotti Durigan",
    "quagliotti durigan, joo luiz": "João Luiz Quagliotti Durigan",

    # Rita de Cássia Marqueti
    "marqueti, rita de cássia": "Rita de Cássia Marqueti",
    "marqueti, rita de cssia": "Rita de Cássia Marqueti",

    # Ivo Vieira de Sousa Neto
    "sousa neto, ivo vieira de": "Ivo Vieira de Sousa Neto",

    # Nuno Manuel Frade de Sousa
    "sousa, nuno manuel frade de": "Nuno Manuel Frade de Sousa",

    # Joao Henrique Falk Neto
    "falk neto, joao henrique": "Joao Henrique Falk Neto",

    # Ramires Alsamir Tibana
    "tibana, ramires alsamir": "Ramires Alsamir Tibana",
    "alsamir tibana, ramires": "Ramires Alsamir Tibana",

    # Guilherme Henrique Lopes
    "henrique lopes, guilherme": "Guilherme Henrique Lopes",
    "lopes, guilherme henrique": "Guilherme Henrique Lopes",

    # Anderson Carlos Marçal
    "marçal, anderson carlos": "Anderson Carlos Marçal",
    "maral, anderson carlos": "Anderson Carlos Marçal",

    # Osvaldo Costa Moreira
    "moreira, osvaldo costa": "Osvaldo Costa Moreira",

    # José Vilaça-Alves
    "vilaça-alves, josé": "José Vilaça-Alves",
    "vilaa-alves, jos": "José Vilaça-Alves",

    # Jymmys Lopes dos Santos
    "dos santos, jymmys lopes": "Jymmys Lopes dos Santos",

    # Ian Jeffreys
    "jeffreys, ian": "Ian Jeffreys",

    # Thomas Rosemann
    "rosemann, thomas": "Thomas Rosemann",

    # Beat Knechtle
    "knechtle, beat": "Beat Knechtle",

    # L. J. Lopes Teles
    "lopes teles, l. j.": "L. J. Lopes Teles",

    # E. B. Neves
    "neves, e. b.": "E. B. Neves",

    # A. L. Díaz-de-Durana
    "díaz-de-durana, a. l.": "A. L. Díaz-de-Durana",
    "daz-de-durana, a. l.": "A. L. Díaz-de-Durana",

    # S. A. O. Júnior
    "júnior, s. a. o.": "S. A. O. Júnior",
    "jnior, s. a. o.": "S. A. O. Júnior",

    # A. M. Toledo
    "toledo, a. m.": "A. M. Toledo",

    # Josevan Cerqueira Leal
    "cerqueira leal, j.": "Josevan Cerqueira Leal",
    "leal, josevan cerqueira": "Josevan Cerqueira Leal",

    # Martim Bottaro
    "bottaro, m.": "Martim Bottaro",
    "bottaro, martim": "Martim Bottaro",

    # Ana Cláudia Garcia Lopes
    "lopes, ana cláudia garcia": "Ana Cláudia Garcia Lopes",
    "lopes, ana cludia garcia": "Ana Cláudia Garcia Lopes",

    # Jefferson Rosa Cardoso
    "cardoso, jefferson rosa": "Jefferson Rosa Cardoso",

    # Lee Brown
    "brown, lee": "Lee Brown",

    # Wagner Rodrigues Martins
    "martins, wagner rodrigues": "Wagner Rodrigues Martins",

    # Euler Alves Cardoso
    "cardoso, euler alves": "Euler Alves Cardoso",

    # Patrícia Guanais
    "guanais, p.": "Patrícia Guanais",
    "guanais, patrícia": "Patrícia Guanais",
    "guanais, patrcia": "Patrícia Guanais",

    # Alessandra C. Coutinho
    "coutinho, alessandra c.": "Alessandra C. Coutinho",
    "coutinho, a c b": "Alessandra C. Coutinho",
    "coutinho, a.": "Alessandra C. Coutinho",
    "coutinho, a cb": "Alessandra C. Coutinho",

    # R. R. G. Costa
    "costa, r. r. g.": "Rodrigo R. Gomes Costa",

    # Igor Magalhães
    "magalhães, igor": "Igor Magalhães",
    "magalhes, igor": "Igor Magalhães",

    # Rinaldo André Mezzarane
    "mezzarane, rinaldo andré": "Rinaldo André Mezzarane",
    "mezzarane, rinaldo andr": "Rinaldo André Mezzarane",

    # Bruno A. Rodrigues
    "rodrigues, bruno a.": "Bruno A. Rodrigues",

    # João B. Ferreira-Junior
    "ferreira-junior, joão b.": "João B. Ferreira-Junior",
    "ferreira-junior, joo b.": "João B. Ferreira-Junior",

    # P. S. S. Beraldo
    "beraldo, p s s": "P. S. S. Beraldo",
    "beraldo, p ss": "P. S. S. Beraldo",

    # Dahan da Cunha Nascimento
    "da cunha nascimento, dahan": "Dahan da Cunha Nascimento",
    "nascimento, dahan da cunha": "Dahan da Cunha Nascimento",

    # Franklin Benik
    "benik, franklin": "Franklin Benik",

    # Keila Elizabeth Fontana
    "fontana, keila elizabeth": "Keila Elizabeth Fontana",

    # Frederico Santos de Santana
    "santos de santana, frederico": "Frederico Santos de Santana",

    # Leopoldo dos Santos Neto
    "dos santos neto, leopoldo": "Leopoldo dos Santos Neto",
    "dos santos-neto, leopoldo": "Leopoldo dos Santos Neto",

    # Renato André Sousa da Silva
    "andré sousa silva, renato": "Renato André Sousa da Silva",
    "andr sousa silva, renato": "Renato André Sousa da Silva",

    # Alessandro de Oliveira Silva
    "deoliveira silva, alessandro": "Alessandro de Oliveira Silva",

    # Darlan Lopes de Farias
    "lopes de farias, darlan": "Darlan Lopes de Farias",

    # Jonato Prestes
    "prestes, jonato": "Jonato Prestes",

    # Sandor Balsamo
    "balsamo, sandor": "Sandor Balsamo",

    # Others
    "parca, r.": "R. Parca",
    "carmo, j.": "J. Carmo",
    "perna, c. e. v.": "C. E. V. Perna",
    "carvalho, v. g.": "V. G. Carvalho",
    "almeida, r. l.": "R. L. Almeida",
    "araujo, m. s.": "Marcela S. Araújo",
    "cidade, r. e. a.": "R. E. A. Cidade",
    "o?shea, bob": "Bob O'Shea"
}

def clean_authors_and_standardize(authors_str):
    authors_str_lower = authors_str.lower().strip()
    
    # 1. Direct override for Pub 62 (weirdly structured)
    if "nascimento; dahan da cunha; ribeiro neto" in authors_str_lower:
        return "Dahan da Cunha Nascimento; Frederico Ribeiro Neto; Renato André Sousa da Silva Santana; Leopoldo dos Santos Neto; Sandor Balsamo"
        
    # 2. General pairing algorithm
    pieces = [p.strip() for p in authors_str.split(';') if p.strip()]
    authors = []
    i = 0
    while i < len(pieces):
        p_lower = pieces[i].lower().strip()
        if p_lower == "carregaro rl":
            authors.append(pieces[i])
            i += 1
        elif i + 1 < len(pieces):
            authors.append(f"{pieces[i]}, {pieces[i+1]}")
            i += 2
        else:
            authors.append(pieces[i])
            i += 1
            
    # 3. Standardize and map each author
    cleaned_mapped_authors = []
    for author in authors:
        author_clean = author.strip()
        author_lower = author_clean.lower().strip()
        
        # Check standard map
        if author_lower in name_standard_map:
            cleaned_mapped_authors.append(name_standard_map[author_lower])
        else:
            # Fallback: keep the name, clean up double spaces, Title Case it
            cleaned_name = re.sub(r'\s+', ' ', author_clean)
            cleaned_mapped_authors.append(cleaned_name)
            
    return "; ".join(cleaned_mapped_authors)

# Clean publications list in database
for idx, p in enumerate(data["publications"]):
    old_val = p["authors"]
    new_val = clean_authors_and_standardize(old_val)
    p["authors"] = new_val
    print(f"Standardized Pub {idx+1}: {new_val}")

# Also update the Rehabilitation & Biomecânica icon in expertise!
for item in data["expertise"]:
    if item["area"] == "Reabilitação & Biomecânica":
        item["icon"] = "bi-heart-pulse"
        print("Updated icon for Reabilitação & Biomecânica in expertise.")

# Save database
with open(r"c:\Users\Usuário\Dropbox\Fred\Antigravity\Perfil Fred\profile_data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("DATABASE COAUTHORS AND ICONS CLEANED SUCCESSFULLY!")
