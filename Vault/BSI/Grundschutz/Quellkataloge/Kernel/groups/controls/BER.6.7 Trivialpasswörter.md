---
tags: Credential_Stuffing_Password_Policy
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.6.7 Trivialpasswörter
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.6.7 - Trivialpasswörter
Tags: "[Credential Stuffing](tags_Credential Stuffing)" "[Password Policy](tags_Password Policy)"
Gruppe: [BER.6 Passwortgebrauch](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.6%20Passwortgebrauch.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Passwortgebrauch](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.6%20Passwortgebrauch.md) *** | Nutzende | SOLLTE | die Verwendung von Trivialpassworten |  | blockieren | Konfigurationshistorie | >Berechtigung für Nutzende SOLLTE die Verwendung von Trivialpassworten blockieren.

> [!info]- Guidance
>Trivialpasswörter sind leicht zu erratende oder zu diesem Zugangskonto bereits öffentlich bekannte Passwörter (erkennbar durch Nutzung sog. Leak Check Datenbanken). Leicht zu erraten sind Passwörter, wenn sie mit gängigen Wörterbuchangriffen (dictionary attacks) bzw. systematischem Ausprobieren (brute force) in kurzer Zeit zu kompromittieren sind. Dazu zählen etwa einfache Folgen wie „123456“, „Passwort“ oder „qwerty“ sowie häufig vorkommende, in Leaks dokumentierte Standardkombinationen. Der Zweck der Anforderung liegt darin, das Risiko unautorisierter Zugriffe zu reduzieren: Ein Angreifer könnte mit automatisierten Tools in Sekunden oder Minuten triviale Passwörter durchprobieren, was zu einem unbefugten Zugriff auf Benutzerkonten, Systemressourcen oder sensible Daten führen könnte. Die Blockierung solcher Passwörter kann dagegen sicherstellen, dass nur schwer vorhersehbare Kennwörter verwendet werden, wodurch ein entscheidender Schutz gegen automatisierte Angriffsverfahren erreicht werden kann.  Zudem können Passwortmanager beim Generieren nicht-trivialer Passwörter unterstützen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | f0722999-f8c4-4c75-810b-94d7563dd698 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | f0722999-f8c4-4c75-810b-94d7563dd698 |
