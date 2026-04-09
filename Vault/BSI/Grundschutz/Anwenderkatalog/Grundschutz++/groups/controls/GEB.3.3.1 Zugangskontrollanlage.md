---
tags: geb331-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: GEB.3.3.1 Zugangskontrollanlage
parent_control: GEB.3.3 Authentifizierung vor Zutritt
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# GEB.3.3.1 - Zugangskontrollanlage
Gruppe: [GEB.3 Physischer Zutritt](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/GEB.3%20Physischer%20Zutritt.md)
---

** Übergeordnetes Control: ** [GEB.3.3 Authentifizierung vor Zutritt](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/GEB.3.3%20Authentifizierung%20vor%20Zutritt.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Gebäudemanagement (GEB)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/GEB%20Gebäudemanagement.md)**<br> ***  &rarr; [Physischer Zutritt](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/GEB.3%20Physischer%20Zutritt.md) *** | Standorte | KANN | Zutritte durch {{einen automatiserten Mechanismus}} | im Einklang mit den Festlegungen des Identitäts- und Berechtigungsmanagements | authentifizieren | Prozess Gebäudemanagement | >Gebäudemanagement für Standorte KANN Zutritte durch {{ insert: param, geb.3.3.1-prm1 }} im Einklang mit den Festlegungen des Identitäts- und Berechtigungsmanagements authentifizieren.

> [!info]- Guidance
>Der Einsatz einer automatischen Zugangskontrollanlage zur Authentifizierung von Personen dient primär dem Schutz von sensiblen Bereichen, vertraulichen Informationen und kritischer Infrastruktur. Durch diese Maßnahme kann sichergestellt werden, dass nur autorisierte Personen Zutritt zu geschützten Bereichen erhalten, wodurch das Risiko von Industriespionage, Datendiebstahl oder Sabotage erheblich reduziert werden kann. Ohne eine solche Kontrolle könnte es beispielsweise zu unbefugtem Zutritt durch Fremde kommen, die sich als Mitarbeiter ausgeben, oder zu einem "Tailgating"-Vorfall, bei dem Unbefugte autorisierten Personen unbemerkt folgen und sich so Zugang verschaffen.  Bei der Implementierung einer automatischen Zugangskontrollanlage kann eine mehrfaktorielle Authentifizierung in Betracht gezogen werden, die auf einer Kombination aus Besitz (z.B. Chipkarte, Token), Wissen (PIN-Code, Passwort) und/oder biometrischen Merkmalen (Fingerabdruck, Gesichtserkennung) basiert. Die Zugangsrechte können granular nach Personengruppen, Zeitfenstern und Bereichen differenziert werden, was die Sicherheit weiter erhöht. Für eine effektive Umsetzung kann die regelmäßige Überprüfung der Protokolle der Zugangskontrollanlage auf ungewöhnliche Aktivitäten hilfreich sein, ebenso wie regelmäßige Sensibilisierungsmaßnahmen für Mitarbeiter bezüglich der korrekten Nutzung der Anlage und der Vermeidung von Sicherheitslücken wie dem gemeinsamen Nutzen von Zugangsmitteln. Die Formulierung "im Einklang mit den Festlegungen des Identitäts- und Berechtigungsmanagements" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik IDM festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 5bc938de-7123-4793-8ba4-3183c2264acf |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 5bc938de-7123-4793-8ba4-3183c2264acf |
