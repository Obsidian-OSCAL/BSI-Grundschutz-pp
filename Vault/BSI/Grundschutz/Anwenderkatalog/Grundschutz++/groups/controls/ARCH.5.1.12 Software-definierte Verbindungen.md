---
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.5.1.12 Software-definierte Verbindungen
parent_control: ARCH.5.1 Einschränkung und Inspektion von Verbindungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.5.1.12 - Software-definierte Verbindungen
Gruppe: [ARCH.5 Perimeterschutz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.5%20Perimeterschutz.md)
---

** Übergeordnetes Control: ** [ARCH.5.1 Einschränkung und Inspektion von Verbindungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.5.1%20Einschränkung%20und%20Inspektion%20von%20Verbindungen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Perimeterschutz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.5%20Perimeterschutz.md) *** | Netze | KANN | Verbindungen zwischen IT-Systemen | anhand dynamischer Kriterien | einschränken | IT-Betriebskonzept | >Architektur für Netze KANN Verbindungen zwischen IT-Systemen anhand dynamischer Kriterien einschränken.

> [!info]- Guidance
>Software-definierte Verbindungen sind logisch kontrollierte Netzwerkpfade, deren Zugriffsbedingungen nicht statisch hinterlegt, sondern anhand aktueller Merkmale bewertet werden; dynamische Kriterien meint dabei festgelegte Filterregeln, deren Werte situativ ermittelt werden, etwa über „context attributes“ oder „dynamic policies“. Solche Merkmale können als contextual signals wie momentane Auslastung, Gerätezustand („device posture“) oder zeitliche Rahmenbedingungen interpretiert werden, während die zugrunde liegenden Regeln unverändert bleiben und nur ihre Bewertung variiert. Dies kann helfen, laterale Bewegungen einzudämmen und kann gleichzeitig unerwartete Zugriffe in veränderten Betriebszuständen abblocken; ein Angriff, der unentdeckt Systeme durchqueren könnte, oder ein kompromittierter Client, der außerhalb definierter Parameter agiert, könnte dadurch abgewehrt werden. Praktisch kann dies über segmentierende „Software-Defined Networking“-Mechanismen, kontextabhängige Firewall-Policies oder adaptive Access-Control-Engines erfolgen. Eine angemessene Absicherung ist hier zu verstehen als ein Bündel verlässlicher Signale, die den Zustand eines Endpunkts oder Dienstes authentisch widerspiegeln. Als Varianten kommen etwa kontextabhängige SDN-Flows, regelbasierte Mikrosegmentierung über Identity-Tags oder der Einsatz von Policy-Engines infrage, die ihre Entscheidungen anhand dynamisch erfasster Werte wie Geräteintegrität, Standort oder Risikobewertung fällen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e1e4bec9-8dc4-4062-a025-6ea70eedb9c9 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | e1e4bec9-8dc4-4062-a025-6ea70eedb9c9 |
