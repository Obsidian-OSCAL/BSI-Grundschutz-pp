---
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.2.3 Änderung von Default-Zugangsdaten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.2.3 - Änderung von Default-Zugangsdaten
Gruppe: [KONF.2 Konfiguration von Systemen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.2%20Konfiguration%20von%20Systemen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Konfiguration von Systemen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.2%20Konfiguration%20von%20Systemen.md) *** | IT-Systeme | SOLLTE | die Änderung von Default-Zugangsdaten |  | ausführen | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE die Änderung von Default-Zugangsdaten ausführen.

> [!info]- Guidance
>"Default-Zugangsdaten" sind werkseitig voreingestellte Benutzername-Passwort-Kombinationen wie "root" oder "administrator", sowie vergleichbare Authentifizierungsmerkmale, die bei der Erstinbetriebnahme von IT-Systemen unverändert vorhanden sind. Diese Daten sind in der Regel öffentlich dokumentiert oder leicht im Internet auffindbar. Ihr Fortbestehen im Produktivbetrieb könnte ein erhebliches Risiko darstellen, da ein Angreifer mit minimalem Aufwand Zugriff auf Systeme erlangen könnte. Ein klassischer Vorfall könnte sein, dass ein öffentlich erreichbarer Router mit unveränderten Standardzugängen übernommen wird. Die Änderung kann demgegenüber sicherstellen, dass nur berechtigte Personen Zugriff erlangen, und kann damit unbefugte Manipulationen oder Datendiebstahl wirksam erschweren. Eine Institution kann die Anforderung umsetzen, indem bei der Inbetriebnahme jedes Systems ein Prozess etabliert wird, der die Standardzugangsdaten unmittelbar ersetzt. Dies kann beispielsweise (1) durch verpflichtende Initial-Setup-Routinen erfolgen, die eine Passwortänderung erzwingen, oder (2) durch zentrale Checklisten oder automatisierte Inventarisierung, die offene Standardzugänge identifizieren und schließen. Die Anforderung ist auch dann erfüllt, wenn diese Zugänge deaktiviert oder durch Zugänge mit von der Institution verwalteten Zugangsdaten ersetzt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 14a61781-67a3-41c7-9f73-89d5809ea2b0 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 14a61781-67a3-41c7-9f73-89d5809ea2b0 |
