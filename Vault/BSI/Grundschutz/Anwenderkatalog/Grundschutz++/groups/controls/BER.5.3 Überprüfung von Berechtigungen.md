---
tags: ber53-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.5.3 Überprüfung von Berechtigungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.5.3 - Überprüfung von Berechtigungen
Gruppe: [BER.5 Berechtigungsmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.5%20Berechtigungsmanagement.md)
---

> [!info]- Untergeordnete Controls
> [BER.5.3.1 Überprüfung tatsächlicher Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BER.5.3.1%20Überprüfung%20tatsächlicher%20Berechtigungen.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Berechtigungsmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.5%20Berechtigungsmanagement.md) *** |  | SOLLTE | vergebene Berechtigungen | {{regelmäßig}} auf Erforderlichkeit | überprüfen | Prüfplan | >Berechtigung SOLLTE vergebene Berechtigungen {{ insert: param, ber.5.3-prm1 }} auf Erforderlichkeit überprüfen.

> [!info]- Guidance
>Erforderlichkeit bedeutet in diesem Kontext, dass eine vergebene Berechtigung nur dann als gerechtfertigt gilt, wenn sie für die aktuelle Aufgabenwahrnehmung, Rolle oder Funktion einer Person tatsächlich benötigt wird. Dabei kann zwischen fachlicher Notwendigkeit (z. B. Zugriff auf eine bestimmte Anwendung, um Kernaufgaben erfüllen zu können) und zeitlicher Relevanz (z. B. Projektzugriff, der nur für die Dauer des Projekts sinnvoll ist) unterschieden werden. Als mögliche Werte für den Parameter regelmäßig bieten sich an: (1) quartalsweise, (2) halbjährlich, (3) jährlich – je nach Kritikalität der Systeme und Sensibilität der Daten. Die regelmäßige Überprüfung der Erforderlichkeit kann verhindern, dass sich unbemerkt überhöhte Rechte („Privilege Creep“) ansammeln, die Angreifern im Falle einer Kompromittierung zusätzlichen Spielraum eröffnen könnten. Ohne solche Kontrollen könnte ein ehemaliger Projektmitarbeiter weiterhin Zugang zu sensiblen Daten haben oder ein interner Angreifer auf nicht benötigte Administrationsrechte stoßen. Umgekehrt kann die Überprüfung sicherstellen, dass Berechtigungen stets am aktuellen Aufgabenprofil ausgerichtet bleiben und so Schaden durch Missbrauch oder Fehlhandlungen eingedämmt werden kann. Zur Umsetzung kann eine Institution rollenbasierte Zugriffskonzepte einsetzen, die regelmäßig mit den Ist-Berechtigungen der Nutzer abgeglichen werden („Access Reviews“). Dies kann durch automatisierte Reports aus Verzeichnisdiensten, Datenbanken oder Fachanwendungen erfolgen, die Verantwortlichen zur Bestätigung oder Korrektur vorgelegt werden. Hilfreich kann auch ein Vier-Augen-Prinzip sein, bei dem Vorgesetzte die Notwendigkeit von Berechtigungen bestätigen. Darüber hinaus kann es nützlich sein, temporäre Projekt- oder Sonderrechte mit Ablaufdatum zu vergeben, sodass diese automatisch entzogen werden, wenn sie nicht mehr bestätigt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 4123f246-95b2-4785-9714-17a5e68462c5 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 4123f246-95b2-4785-9714-17a5e68462c5 |
