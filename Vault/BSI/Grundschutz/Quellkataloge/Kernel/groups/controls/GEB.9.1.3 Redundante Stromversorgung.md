---
tags:
- Hochverfügbarkeit
- geb913-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: GEB.9.1.3 Redundante Stromversorgung
parent_control: GEB.9.1 Normgerechte Stromversorgung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# GEB.9.1.3 - Redundante Stromversorgung
Tags: "[Hochverfügbarkeit](tags_Hochverfügbarkeit)"
Gruppe: [GEB.9 Versorgungseinrichtungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/GEB.9%20Versorgungseinrichtungen.md)
---

** Übergeordnetes Control: ** [GEB.9.1 Normgerechte Stromversorgung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/GEB.9.1%20Normgerechte%20Stromversorgung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Gebäudemanagement (GEB)](BSI/Grundschutz/Quellkataloge/Kernel/groups/GEB%20Gebäudemanagement.md)**<br> ***  &rarr; [Versorgungseinrichtungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/GEB.9%20Versorgungseinrichtungen.md) *** | Standorte | KANN | eine redundante Stromversorgung | für {{eine Stützzeit}} | installieren | IT-Betriebskonzept | >Gebäudemanagement für Standorte KANN eine redundante Stromversorgung für {{ insert: param, geb.9.1.3-prm1 }} installieren.

> [!info]- Guidance
>Wenn die Stromzufuhr ausfällt, könnten geschäftskritische Anwendungen unerwartet ausfallen oder Daten verlorengehen.   Die Redundanz der Stromquelle kann z.B. durch einen im System integrierten Akku, durch eine eigenständige unterbrechungsfreie Stromversorgung (USV) oder durch die Anbindung an ein sekundäres Stromnetz gewährleistet werden. Bei Bedarf kann sie auch die Übergangszeit bis zum Anlauf einer längerfristigen Netzersatzanlage überbrücken. Beim Betrieb einer USV ist auf die Einhaltung eines akzeptablen Temperaturbereichs der Batterie zu achten. Bei relevanten Änderungen an den Verbrauchern könnte es vorkommen, dass die USV-Systeme nicht mehr ausreichend dimensioniert sind. Da der Leistungsbedarf von Klimaanlagen oft zu hoch für eine USV ist, empfiehlt es sich zumindest die Steuerung der Anlagen an die unterbrechungsfreie Stromversorgung anzuschließen. Eine regelmäßige Wartung (u.U. nach Vorgabe des Herstellers) der USV und eine Trennung der Leistungselektronik von der Batterie ist empfohlen. Bei sehr hohem Schutzbedarf empfiehlt sich eine redundante Auslegung der USV.  Die minimale Stützzeit (Autonomiezeit) ergibt sich als Stützzeit = Wartezeit auf mögliche Wiederkehr der Stromversorung + 2 * Zeit zum Herunterfahren der Komponenten. Bei sehr hohem Schutzbedarf empfiehlt sich eine redundante Auslegung der USV.  Die Verkabelungswege sind redundant, wenn die Leitungen über verschiedene Wege geführt sind, sodass z.B. eine versehentliche Trennung nicht beide Leitungen betrifft.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | eeaa8977-05e5-4eaa-a5b7-ea490eb543cd |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | eeaa8977-05e5-4eaa-a5b7-ea490eb543cd |
