---
tags: arch71-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.7.1 Dedizierte Hostsysteme für Server
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.7.1 - Dedizierte Hostsysteme für Server
Gruppe: [ARCH.7 Dedizierte Systeme](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.7%20Dedizierte%20Systeme.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Dedizierte Systeme](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.7%20Dedizierte%20Systeme.md) *** | Anwendungen | SOLLTE | Serverdienste ausschließlich auf für die Anwendung dedizierten {{virtuellen oder physischen}} Hostsystemen |  | platzieren | Konfigurationshistorie | >Architektur für Anwendungen SOLLTE Serverdienste ausschließlich auf für die Anwendung dedizierten {{ insert: param, arch.7.1-prm1 }} Hostsystemen platzieren.

> [!info]- Guidance
>„Serverdienste“ bezeichnen hier die logisch oder physisch abgegrenzten IT-Services (engl. server services), die bestimmte Funktionalitäten einer Anwendung bereitstellen, etwa Datenbankinstanzen, Webserver-Komponenten oder API-Endpunkte. Ein „dediziertes Hostsystem“ (engl. dedicated host system) ist dabei ein physischer oder virtueller Server, der ausschließlich für eine einzelne Anwendung und deren zugehörige Serverdienste betrieben wird, ohne dass darauf weitere fachfremde oder von der Anwendung unabhängige Dienste ausgeführt werden. Mögliche Bereitstellungsformen können virtualisierte Maschinen, Container-fähige Hypervisor-Instanzen, Bare-Metal-Server oder Appliances sein. Diese Abgrenzung dient der klaren Trennung von Verantwortlichkeiten, Konfigurationen und Ressourcen und reduziert die Komplexität innerhalb der Systemlandschaft. Sie schafft eine saubere Zuordnung zwischen Anwendung und ihrer technischen Plattform, was die Nachvollziehbarkeit, Wartbarkeit und Sicherheit der jeweiligen Lösung deutlich erhöht. Ziel ist, dass nicht mehrere Server-Anwendungen auf einem Betriebssystem (oder sogar auf Endgeräten) laufen, um systemische Risiken zu minimieren, die aus Mehrfachnutzung oder unklarer Ressourcenteilung entstehen könnten. Sonst könnte es etwa durch unerwartete Wechselwirkungen zwischen Diensten, fehlerhafte Berechtigungszuweisungen, unbeabsichtigte Seitenkanäle, unkontrollierte Ressourcenkonflikte oder Abhängigkeiten bei Systemupdates zu Betriebsproblemen oder lateralen Bewegungen von Angreifenden kommen. Die Anforderung kann auch durch die Verwendung von virtuellen Maschinen oder Containern realisiert werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | dbc89a40-82e3-48c7-9422-ce8f874ca1cf |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | dbc89a40-82e3-48c7-9422-ce8f874ca1cf |
