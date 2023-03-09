import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

	
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Manifest() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
	
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "max-content", minHeight: "90vh" , margin:" 0 0 60px 0"}}
	  >
		  
		  <Tabs
        orientation="vertical"
        
        value={value}
        onChange={handleChange}
			  aria-label="scrollable auto tabs example"
			  sx={{ borderRight: 1, borderColor: 'divider', minWidth:"26vh", maxWidth:"26vh", position:"fixed"}}
			  variant="scrollable"
       scrollButtons="auto"
      >
			  <Tab label="Postanowienia ogólne" {...a11yProps(0)} sx={{
				  minHeight:"20vh"
			  }} />
        <Tab label="Cele Koła" {...a11yProps(1)} sx={{
				  minHeight:"20vh"
			  }}/>
        <Tab label="Członkowie Koła" {...a11yProps(2)} sx={{
				  minHeight:"20vh"
			  }}/>
        <Tab label="Władze Koła" {...a11yProps(3)} sx={{
				  minHeight:"20vh"
			  }}/>
        <Tab label="Postanowienia końcowe" {...a11yProps(4)} sx={{
				  minHeight:"20vh"
			  }}/> 
		  </Tabs>
		  <TabPanel value={value} index={0} >
		<ol>
<li>Nazwa koła </li>
	<ul>
		<li>Koło nosi nazwę Studenckie Koło Naukowe Python ,,PyHawks"</li>
		<li>Skrótem od nazwy koła, wykorzystywanym w oficjalnych materiałach jest PyHawks</li>
	</ul>
	<li> Status koła </li>
	<ul>
		<li>Koło naukowe skupia w swym gronie studentów, doktorantów i pracowników Uniwersytetu Warmińsko-Mazurskiego oraz inne osoby zainteresowane realizacją jego celów statutowych.</li>
		<li>Działalność Koła opiera się na społecznej pracy jego członków.</li>
		<li>Przynależność do koła jest dobrowolna.</li>
	</ul>
<li> Pieczęć i znak graficzny </li>
	<ul>
		<li>Koło naukowe może posługiwać się pieczęcią oraz znakiem graficznym.</li>
		<li>Pieczęć oraz znak graficzny są wybierane przez Zarząd Koła.</li>
		<li>Wybrane wzory pieczęci oraz znaku graficznego muszą umożliwiać jednoznaczne określenie ich przynależności do Koła.</li>
		<li>Wykorzystywana pieczęć oraz znak graficzny publikowane są na stronie Koła.</li>
	</ul>
</ol>

      </TabPanel>
      <TabPanel value={value} index={1} >
	  <ol start="4">
		<li>Główne cele</li>
	<ul><li>Do głównych celów działalności koła należą:</li>
		<ul>
		<li>rozwijanie wiedzy członków Koła,</li>
		<li>promowanie osobistego rozwoju naukowego wśród studentów,</li>
		<li>promowanie Wydziału Matematyki i Informatyki na forum lokalnych i krajowych organizacji studenckich,</li>
		<li>popularyzacja wiedzy w zakresie języka programowania Python oraz obszarów w których jest często wykorzystywany</li>
		</ul>
		</ul>
	<ul><li>Cele są realizowane poprzez:</li>
	<ul>
		<li>organizowanie seminariów, warsztatów i konferencji,</li>
		<li>udział w konferencjach organizowanych przez inne organizacje o podobnych celach,</li>
		<li>współpracę z innymi organizacjami studenckimi,</li>
		<li>ścisłą współpracę z firmami z branży sektora IT,</li>
		<li>opracowywanie referatów naukowych.</li>
	</ul>
	</ul>
	</ol>

      </TabPanel>
      <TabPanel value={value} index={2} >
	<ol start="5"> 
				  
		<li> Zasady członkostwa</li>
		<ul>
			<li>Status Członka uzyskują osoby aktywnie uczestniczące w życiu koła, do którego zalicza się:</li>
			<ul>
				<li>prowadzenie prezentacji w czasie seminariów Koła,</li>
				<li>prowadzenie warsztatów,</li>
				<li>udział w projektach realizowanych w ramach Koła,</li>
				<li>udział w sprawach organizacyjnych Koła,</li>
				<li>udział w promocji Koła.</li>
			</ul>
			<li>Członkowie Koła mają prawo udziału w Walnym Zgromadzeniu, a co za tym idzie – prawo udziału w wyborze Zarządu Koła.</li>
			<li>Utrata statusu Członka może nastąpić w wyniku:</li>
			<ul>
				<li>rezygnacji z dalszego udziału w życiu Koła,</li>
				<li>pogwałcenia zasad opisanych przez niniejsze postanowienia,</li>
				<li>działania na szkodę Koła.</li>
			</ul>
		
      		<li> Decyzję o wydaleniu członka z uczestnictwa w kole naukowym podejmuje Zarząd Koła.</li>
		</ul>
	</ol>

		  </TabPanel>
		  
      <TabPanel  className="Tabpanel" value={value} index={3} >
			  <ol start="6"> 		  
	  <li>Organy zarządcze Koła</li>
		<ul><li>Organami Koła są:</li>
		<ul>
			<li>Prezes Koła,</li>
			<li>Zarząd Koła,</li>
			<li>Walne Zgromadzenie,</li>
			<li>Opiekun Koła.</li>
		</ul>
		</ul>
		<li>Prezes Koła</li>
		<ul>
			<li>Prezes Koła jest wybierany przez Walne Zgromadzenie spośród jego członków.</li>
			<li>Kadencja Prezesa trwa 1 rok.</li>
			<li>Wybory Prezesa odbywają się w ciągu miesiąca od rozpoczęcia danego roku akademickiego.</li>
			<li>W sytuacji, gdy Prezes nie może pełnić swoich obowiązków, wyznacza on spośród członków Zarządu Koła na czas określony osobę pełniącą obowiązki Prezesa.</li>
			<li>Kadencja Prezesa wygasa w następujących sytuacjach:</li>
		
		<ul>
			<li>upływu jej terminu,</li>
			<li>złożenia rezygnacji przez urzędującego Prezesa,</li>
			<li>odwołania Prezesa na wniosek Opiekuna Koła lub członka Zarządu Koła, przegłosowany przez Walne Zgromadzenie.</li>
		</ul>
		</ul>
		<ul>
		<li>W przypadku przedwczesnego wygaśnięcia kadencji Prezesa, Zarząd Koła wybiera nowego Prezesa, którego kadencja trwa do czasu przeprowadzenia corocznych wyborów.</li>
		<li>Do obowiązków Prezesa Koła zaliczają się następujące zadania:</li>
		`<ul>
			<li>reprezentowanie Koła na forum organizacji zewnętrznych,</li>
			<li>organizowanie pracy Koła,</li>
			<li>potwierdzanie pism w imieniu Koła własnoręcznym podpisem,</li>
			<li>zwoływanie i przewodniczenie zebraniom Walnego Zgromadzenia,</li>
			<li>dbanie o dobre imię Koła,</li>
			<li>współpraca z Opiekunem Koła w sprawach wymagających jego udziału.</li>
		</ul>
		</ul>
		<li> Zarząd Koła</li>
		<ul>
			<li>Zarząd Koła jest wybierany w czasie Walnego Zgromadzenia spośród Członków Koła.</li>
			<li>Kadencja członka Zarządu trwa 1 rok.</li>
			<li>Wybór członków Zarządu odbywa się w drodze konkursu kandydatur zakończonego tajnym głosowaniem.</li>
			<li>W przypadku braku wiążącego wyniku, decydujący głos posiada Opiekun Koła. Jeśli Opiekun rezygnuje z tego przywileju, wybór odbywa się na podstawie ponownego głosowania.</li>
			<li>Decydującym kryterium przy wyborze członków Zarządu jest aktywny udział w życiu Koła określony w § 5 pkt. 1</li>
			<li>Prezes Koła może wnioskować do Rady Koła o odwołanie członka Zarządu. Wniosek jest przyjmowany bądź odrzucany zwykłą większością głosów.</li>
			<li>Prezes Koła może wnioskować do Rady Koła o rozszerzenie składu osobowego Zarządu, jeśli ilość obowiązków przekracza możliwości aktualnego Zarządu.<br/> Wniosek jest przyjmowany bądź odrzucany zwykłą większością głosów.</li>
			<li>Do zadań Zarządu koła należą:</li>
			<ul>
				<li>organizowanie pracy Koła,</li>
				<li>ustalanie programu prac Koła,</li>
				<li>nadzorowanie prac wykonywanych w ramach Koła,</li>
				<li>monitorowanie postępu projektów realizowanych w ramach Koła,</li>
				<li>powoływanie i odwoływanie Prezesa,</li>
				<li>zatwierdzanie Opiekuna Koła,</li>
				<li>prowadzenie internetowego serwisu informacyjnego Koła,</li>
				<li>nawiązywanie kontaktów i współpraca z firmami z branży IT,</li>
				<li>promowanie Koła na forum wydziału i uczelni, organizacji studenckich oraz internetowych mediów społecznościowych.</li>
			</ul>
		</ul>
		<li> Walne Zgromadzenie</li>
			<ul>
				<li>W skład Walnego Zgromadzenia wchodzą wszyscy członkowie Koła oraz Opiekun.</li>
				<li>Walne Zgromadzenie jest zwoływane przez Prezesa Koła nie rzadziej niż raz w ciągu roku akademickiego.</li>
				<li>Głównym zadaniem Walnego Zgromadzenia jest wybór członków Zarządu Koła.</li>
			</ul>
		<li> Opiekun Koła</li>
			<ul>
				<li>Funkcję Opiekuna Koła może pełnić pracownik Wydziału Matematyki i Informatyki.</li>
				<li>Opiekun, w razie konieczności, reprezentuje Koło wobec władz uczelni.</li>
				<li>Propozycję współpracy z Kołem składa Prezes w oparciu o decyzję Rady Koła podjętą w drodze konsensusu.</li>
				<li>Decyzję o rezygnacji ze współpracy z aktualnym Opiekunem Koła może podjąć Rada Koła.</li>
				<li>Opiekun potwierdza własnoręcznym podpisem wymagające tego dokumenty, nadając im w ten sposób prawomocność.</li>
				<li>Opiekun może wnioskować o odwołanie Prezesa lub wykluczenie dowolnego członka z Koła w przypadku pogwałcenia zasad określonych przez niniejszy dokument.</li>
			</ul>
				  </ol>
				  

      </TabPanel>
      <TabPanel value={value} index={4} >
		<ol start="11">
	  		<li>Początek obowiązywania dokumentu</li>
				<ul><li>Postanowienia niniejszego dokumentu wchodzą w życie po jego podpisaniu przez Prezesa i Opiekuna Koła.</li></ul>
	
 			<li>Zmiany celu i założeń koła</li>
				<ul><li>O zmianach w treści niniejszego dokumentu decyduje Zarząd Koła w drodze konsensusu.</li></ul>
 			<li>Rozwiązanie Koła</li>
				<ul><li>Rozwiązanie Koła może nastąpić w efekcie jednogłośnie podjętej decyzji w czasie Walnego Zgromadzenia.</li></ul>
  			<li>Sprawy nieuregulowane w celach i założeniach</li>
				<ul><li>O wszystkich sprawach, których nie reguluje niniejszy dokument, decyduje Zarząd Koła.</li></ul>
		</ol>

      </TabPanel>
    </Box>
  );
}